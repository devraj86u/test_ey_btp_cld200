sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'dev.app.purchaseorderapp',
            componentId: 'PurchaseOrderItemSetObjectPage',
            contextPath: '/POs/Items'
        },
        CustomPageDefinitions
    );
});