#!/usr/bin/env python
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
import buildconfig


def main(output):
    output.write("/* THIS FILE IS GENERATED BY UpdateUrlConstants.py - DO NOT EDIT */\n\n")

    OS_TARGET = buildconfig.substs["OS_TARGET"]
    output.write("pub const OS_TARGET: &str = \"{}\";\n".format(OS_TARGET))

    TARGET_XPCOM_ABI = buildconfig.substs["TARGET_XPCOM_ABI"]
    output.write("pub const TARGET_XPCOM_ABI: &str = \"{}\";\n".format(TARGET_XPCOM_ABI))

    MOZ_ASAN = "true" if buildconfig.substs.get("MOZ_ASAN") else "false"
    output.write("pub const MOZ_ASAN: bool = {};\n".format(MOZ_ASAN))

    GRE_MILESTONE = buildconfig.substs["GRE_MILESTONE"]
    output.write("pub const GRE_MILESTONE: &str = \"{}\";\n".format(GRE_MILESTONE))
