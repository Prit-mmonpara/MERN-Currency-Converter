let master = require('./Master.json')
let company_master = require('./company-master.json')
  
let result = [];

// master["data"]["company_info"].forEach((ele) => console.log(ele));

function getContactPersonDetails(ele)
{
    let obj = {};

    obj.role_code = master.data.contact_person.party_role.find((ele1) => ele1.role_code == ele.contact_person.role_code).role_code;
    
    obj.web_login = {
      status_code : master.data.contact_person.web_login.find((ele1) => ele1.status_code == ele.contact_person.web_login.status_code).status_code,
      status_name : master.data.contact_person.web_login.find((ele1) => ele1.status_code == ele.contact_person.web_login.status_code).status_name
    }

    obj.designation_code = master.data.contact_person.designation.find((ele1) => ele1.designation_code == ele.contact_person.designation_code).designation_code;

    obj.permission = ele.contact_person.permission;

    let obj3 = {};
    
    let arr = [];
    for(let key in master.data.contact_person.documents)
      if(ele.contact_person.contact_person_documents.submited_documents.includes(master.data.contact_person.documents[key]["document_code"]))
        arr.push(master.data.contact_person.documents[key]["document_name"]);
    
    // obj3.submited_documents = arr;
    // obj3.doc_status = master.data.contact_person.documents_status.find((ele1) => ele1.status_code == ele.contact_person.contact_person_documents.doc_status).status_name;

    obj.contact_person_documents = {
      submited_documents : arr,
      doc_status: master.data.contact_person.documents_status.find((ele1) => ele1.status_code == ele.contact_person.contact_person_documents.doc_status).status_name
    }
    // obj.contact_person_documents = obj3;
    // console.log(obj3)

    obj.role_name = master.data.contact_person.party_role.find((ele1) => ele1.role_code == ele.contact_person.role_code).role_name;
    obj.designation_name = master.data.contact_person.designation.find((ele1) => ele1.designation_code == ele.contact_person.designation_code).designation_name

    return obj;
}

company_master.company_details.forEach((ele) => {
    // console.log(ele);
    let obj = {}
    obj.company_name = ele.company_name; 
    obj.handling_company = master.data.company_info.handling_company.find((ele1) => ele1.company_code == ele.handling_company_code).company_name;
    obj.grade_name = master.data.company_info.company_grade.find((ele1) => ele1.grade_code == ele.grade_code).grade_name;
    obj.business_type_name = master.data.company_info.business_type.find((ele1) => ele1.business_type_code == ele.business_type_code).business_type_name;
    obj.group_name = master.data.company_info.company_group.find((ele1) => ele1.group_code == ele.group_code).group_name;
    obj.trade_name = master.data.company_info.member_of_trade.find((ele1) => ele1.trade_code == ele.trade_code).trade_name;
    obj.office_country_name = master.data.company_info.offices_countries.find((ele1) => ele1.country_code == ele.office_country_code).country_name;
    obj.communication_name = master.data.company_info.social_media.find((ele1) => ele1.communication_code == ele.communication_code).communication_name;
    obj.event_code = master.data.company_info.source.find((ele1) => ele1.event_code == ele.event_code).event_name;
    obj.category_code = master.data.company_info.party_contacts_category.find((ele1) => ele1.category_code == ele.category_code).category_name;
    
    let tempObj = {};
    tempObj.status_name = master.data.company_info.documents_status.find((ele1) => ele1.status_code == ele.documents_status.status_code).status_name;
    obj.documents_status = tempObj;
    obj.source_type_desc = master.data.company_info.source_type_master.find((ele1) => ele1.source_type_code == ele.source_type_code).source_type_desc
    obj.account_type_name = master.data.company_info.default_kam_bank_code.find((ele1) => ele1.bank_code == ele.bank_code).account_type_name
    
    
    obj.contact_person = getContactPersonDetails(ele);
    result.push(obj);
    // console.log(obj.contact_person.web_login);
    // console.log(obj.contact_person.permission);
    // console.log(obj.contact_person.contact_person_documents);

})

console.log(result);



// let obj = {
//       "tab_name": "feedback_details_column_filter",
//       "column_order": {}
// }


// fetch('https://bold-currently-lemur.ngrok-free.app/assesment/1')
//   .then(response => response.json()) // Parse JSON
//   .then(data => {
//     // for(let x in data)
//         // console.log(data["data"]);
//     // for(let x in data["data"])
//     // {
//     //     console.log(data["data"][x]["key"]);
//     // }

//     data["data"].forEach((ele) => {
//         obj.column_order[ele.key] = {
//           "entity_value": true,
//           "is_active": true,
//           "is_updatable": true,
//           "order": ele.index
//         };
//     })
//     console.log(obj);
//   })
//   .catch(error => console.error("Error:", error));

// //   console.log(obj);
