/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

/* Application in use complete MAR file patch apply success test */

async function run_test() {
  if (!setupTestCommon()) {
    return;
  }
  gTestFiles = gTestFilesCompleteSuccess;
  gTestDirs = gTestDirsCompleteSuccess;
  await setupUpdaterTest(FILE_COMPLETE_MAR, false);
  await runHelperFileInUse(DIR_RESOURCES + gCallbackBinFile, false);
  runUpdate(STATE_SUCCEEDED, false, 0, true);
  await waitForHelperExit();
  await checkPostUpdateAppLog();
  checkAppBundleModTime();
  standardInit();
  checkPostUpdateRunningFile(true);
  checkFilesAfterUpdateSuccess(getApplyDirFile);
  checkUpdateLogContents(LOG_COMPLETE_SUCCESS);
  await waitForUpdateXMLFiles();
  checkUpdateManager(STATE_NONE, false, STATE_SUCCEEDED, 0, 1);
  checkCallbackLog();
}
