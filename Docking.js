/**
 * Created by haseebriaz on 03/03/15.
 */

window.addEventListener("DOMContentLoaded", function() {
    fin.desktop.main(function () {

        var dockingManager = new DockingManager();
        var counter = 0;

        dockingManager.register(fin.desktop.Window.getCurrent(), false);
        function createChildWindow() {

            var dw = new fin.desktop.Window({

                name: "child" + counter++,
                url: "childWindow.html",
                defaultWidth: 200,
                defaultHeight: 150,
                defaultTop: screen.availHeight - 100,
                defaultLeft: screen.availWidth - 150,
                frame: false,
                resize: true,
                windowState: "normal",
                autoShow: true

            }, function () {

                dockingManager.register(dw);
            });


            return dw;
        }

        document.getElementById("createWindows").onclick = createChildWindow;
    });
});