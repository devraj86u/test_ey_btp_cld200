sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'dev/app/purchaseorderapp/test/integration/FirstJourney',
		'dev/app/purchaseorderapp/test/integration/pages/POsList',
		'dev/app/purchaseorderapp/test/integration/pages/POsObjectPage',
		'dev/app/purchaseorderapp/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('dev/app/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);