/**
 * 
 */

$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

//SAVE======================================
$(document).on("click", "#btnSave", function(event)
{
	//clear alerts-----------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	//Form validation-------------------------
	var status = validationDoctorForm();
	if(status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	//If valid-------------------------
	var type = ($("#hiddoctorIDSave").val() == "" ) ? "POST" : "PUT";

	$.ajax(
		{
		url : "DoctorAPI",
		type : type,
		data : $("#formDoctor").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
		onDoctorSaveComplete(response.responseText, status);
		}
	 });
});

function onDoctorSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divDoctorsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hiddoctorIDSave").val("");
	$("#formDoctor")[0].reset();
}

//UPDATE========================================== 
$(document).on("click", ".btnUpdate", function(event) 
{     
	//console.log($(this).closest("tr"));
	//document.getElementById("hiddoctorIDSave").value = "Update";
	$("#hiddoctorIDSave").val($(this).closest("tr").find('#hidDoctorIDUpdate').val()); 
	$("#nic").val($(this).closest("tr").find('td:eq(0)').text());
	$("#gender").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#firstName").val($(this).closest("tr").find('td:eq(2)').text());
	$("#lastName").val($(this).closest("tr").find('td:eq(3)').text()); 
	$("#email").val($(this).closest("tr").find('td:eq(4)').text());
	$("#specification").val($(this).closest("tr").find('td:eq(5)').text());
	$("#contact").val($(this).closest("tr").find('td:eq(6)').text());
	$("#workDate").val($(this).closest("tr").find('td:eq(7)').text());
	$("#workTime").val($(this).closest("tr").find('td:eq(8)').text());
	$("#password").val($(this).closest("tr").find('td:eq(9)').text());
	$("#adminID").val($(this).closest("tr").find('td:eq(10)').text());
	$("#doctorStatus").val($(this).closest("tr").find('td:eq(11)').text());
	//$("#valid").val($(this).closest("tr").find('td:eq(12)').text());
	
}); 

//DELETE==========================================================
$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "DoctorAPI",
		type : "DELETE",
		data : "doctorID=" + $(this).data("doctorid"),
		dataType : "text",
		complete : function(response, status)
		{
			onDoctorDeleteComplete(response.responseText, status);
		}
	});
});

function onDoctorDeleteComplete(response, status)
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully deleted.");   
			$("#alertSuccess").show(); 

			$("#divDoctorsGrid").html(resultSet.data);   
			} else if (resultSet.status.trim() == "error")  
			{    
				$("#alertError").text(resultSet.data);    
				$("#alertError").show();   
			} 

			} else if (status == "error")  
			{   
				$("#alertError").text("Error while deleting.");   
				$("#alertError").show();  
			} else  
			{   
				$("#alertError").text("Unknown error while deleting..");   
				$("#alertError").show();  
			} 
	} 

//CLIENT-MODEL============================================

function validationDoctorForm()
{
	//NIC
	if ($("#nic").val().trim() == "") 
	{   
		return "Insert NIC."; 
	} 
	
	//gender
	if ($("#gender").val().trim() == "") 
	{  
		return "Insert Gender.";
		
	} 
	
	//first name
	if ($("#firstName").val().trim() == "") 
	{  
		return "Insert the Fisrt Name.";
		
	} 
	
	//last name
	if ($("#lastName").val().trim() == "") 
	{  
		return "Insert the Last Name.";
		
	} 
	
	//email
	if ($("#email").val().trim() == "") 
	{  
		return "Insert the Email Address.";
		
	} 
	
	//specification
	if ($("#specification").val().trim() == "") 
	{  
		return "Insert the specification.";
		
	} 
	
	//contact
	if ($("#contact").val().trim() == "") 
	{  
		return "Insert the Contact Number.";
		
	} 
	
	// is numerical value 
	var conNo = $("#contact").val().trim(); 
	if (!$.isNumeric(conNo)) 
	{   
		return "Insert a numerical value for the contact number."; 
		
	} 
	
	//work date
	if ($("#workDate").val().trim() == "") 
	{  
		return "Insert the working date.";
		
	} 
	
	//work time
	if ($("#workTime").val().trim() == "") 
	{  
		return "Insert the working time.";
		
	} 
	
	//password
	if ($("#password").val().trim() == "") 
	{  
		return "Insert the password.";
		
	} 
	
	//adminID
	if ($("#adminID").val().trim() == "") 
	{  
		return "Insert the admin ID.";
		
	} 
	
	//doctor status
	if ($("#doctorStatus").val().trim() == "") 
	{  
		return "Insert the doctor status.";
		
	} 
	
	//valid
	/*if ($("#valid").val().trim() == "") 
	{  
		return "Insert the validation.";
		
	} */
	
	
	return true;
}