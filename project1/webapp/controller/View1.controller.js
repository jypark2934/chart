sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var oData = {
                    milk : [
                        { Week : '1주차', Revenue : 1002, Cost : 2323 },
                        { Week : '2주차', Revenue : 1202, Cost : 2323 },
                        { Week : '3주차', Revenue : 10012, Cost : 2113 },
                        { Week : '4주차', Revenue : 1002, Cost : 1000 }
                    ]
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                var oVizFrame = this.byId("idVizFrame");
                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());

            }
        });
    });
