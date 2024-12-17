## Assesment
---
  ### Q1 : call this api and print expected output as per api response

  ```curl
    curl --location 'https://bold-currently-lemur.ngrok-free.app/assesment/1'
  ```

  OP varible : 
   ```json 
    {
      "tab_name": "feedback_details_column_filter",
      "column_order": {}
    }
  ```
  In this dummy object, populate the column_order key with entries from the input array where the values of entity_value, is_active, or is_updatable are true. Each entry should use the column's field or key as the object key and the index as its value for sorting.

  Actual OP:
  ```json
    {
      "tab_name": "feedback_details_column_filter",
      "column_order": {
        "serial_number": {
          "entity_value": true,
          "is_active": true,
          "is_updatable": true,
          "order": 1
        },
        "action_code": {
          "entity_value": true,
          "is_active": true,
          "is_updatable": true,
          "order": 2
        },
        "action_name": {
          "entity_value": true,
          "is_active": true,
          "is_updatable": true,
          "order": 3
        },
        "group_name": {
          "entity_value": true,
          "is_active": true,
          "is_updatable": true,
          "order": 4
        },
        "display_name": {
          "entity_value": true,
          "is_active": true,
          "is_updatable": true,
          "order": 5
        },
        "description": {
          "entity_value": true,
          "is_active": true,
          "is_updatable": true,
          "order": 6
        },
        "action_key": {
          "entity_value": true,
          "is_active": true,
          "is_updatable": true,
          "order": 7
        },
        "active": {
          "entity_value": true,
          "is_active": true,
          "is_updatable": true,
          "order": 8
        },
        "action": {
          "entity_value": true,
          "is_active": true,
          "is_updatable": true,
          "order": 9
        }
      }
    }
  ```

---

 ### Q2 : from Master.json and Company-master.json preprare excepcted output.


```javascript

/**
 * @author Harsh Patel
 * @description Javascript basics
 */
let master = require('./Master.json')
let company_master = require('./company-master.json')
  
```
 
By using this sample code convert company_master into expected output json for all the companies which are in company_master.json

```json
[
  {
    "company_name": "Trade PVT",
    "handling_company_name": "1D",
    "geade_name": "POOR",
    "business_type_name": "Wholesaler Offline",
    "group_name": "Show Leads",
    "trade_name": "Bharat Diamond Bourse",
    "office_country_name": "FRANCE",
    "communication_name": "Instagram",
    "event_name": "June Hk-2013",
    "category_name": "Others",
    "documents_status": {
      "status_name": "Deactive"
    },
    "source_type_desc": "Organization Address Phone",
    "account_type_name": "Current Account",
    "contact_person": {
      "role_code": 11,
      "web_login": {
        "status_code": 4,
        "status_name": "Disable"
      },
      "designation_code": 9,
      "permission": {
        "role_code": 2
      },
      "contact_person_documents": {
        "submited_documents": [
          "Driving Licence",
          "Voter ID",
          "Client Card"
        ],
        "doc_status": "Deactive"
      },
      "role_name": "",
      "designation_name": "Other Designation"
    }
  }
]
```

---
