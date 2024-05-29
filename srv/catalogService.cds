using { dev.db.master, dev.db.transaction } from '../db/datamodel';

service CatalogService @(path: 'catalogService'){

    entity EmployeeSet  as projection on master.employees;
    entity BusinessPartenerSet as projection on master.businesspartner;
    entity ProductSet as projection on master.product;
    entity BPAddressSet as projection on master.address;
    entity POs @(
      odata.draft.enabled: true
    ) as projection on transaction.purchaseorder{
        *,
        Case OVERALL_STATUS
          when 'O' then 'Open'
          when 'A' then 'Approved'
          when 'X' then 'Rejected'
          when 'N' then 'New'
          when 'D' then 'Delivered'
          end as OverallStatus : String(10),
        Case OVERALL_STATUS
          when 'O' then 0
          when 'A' then 3
          when 'X' then 1
          when 'N' then 1
          when 'D' then 2
          end as criticality : String(10),
    } actions{
          @cds.odata.bindingparameter.name : '_dev'
        @Common.SideEffects : {
                TargetProperties : ['_dev/GROSS_AMOUNT']
            }  
        action boost();
        function largestOrder() returns array of POs;

    };
    entity PurchaseOrderItemSet as projection on transaction.poitems;

        
    }

