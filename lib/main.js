var ActionButton = require("sdk/ui/button/action").ActionButton;
var Hotkey = require("sdk/hotkeys").Hotkey;
var windows = require("sdk/windows").browserWindows;
var viewFor = require("sdk/view/core").viewFor;

var button = ActionButton({
    id: "print-preview-button-restartless",
    label: "Print Preview",
    icon: {
        "16": "./button-16.png",
        "32": "./button-32.png",
        "64": "./button-64.png"
    },
    onClick: function () {
        doPrintPreview();
    }
});

var hotkey = Hotkey({
    combo: "accel-alt-shift-p",
    onPress: function() {
        doPrintPreview();
    }
});

function doPrintPreview() {
    let activeDomWindow = viewFor(windows.activeWindow);
    let PrintUtils = activeDomWindow.PrintUtils;
    let PrintPreviewListener = activeDomWindow.PrintPreviewListener;
    PrintUtils.printPreview(PrintPreviewListener);
}
