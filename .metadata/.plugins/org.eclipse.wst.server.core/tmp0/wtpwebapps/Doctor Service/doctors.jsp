<%@page import="com.Doctor"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Doctor Service</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js.js"></script>
<script src="Components/doctor.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Doctors Management</h1>
				
				<form id="formDoctor" name="formDoctor">
					NIC: 
					<input id="nic" name="nic" type="text"
						class="form-control form-control-sm">
						
						 <br> Gender:
						  <input id="gender" name="gender" type="text"
						class="form-control form-control-sm">
						
						 <br> First Name: <input id="firstName" name="firstName" type="text"
						class="form-control form-control-sm">
						
						  <br> Last Name: <input id="lastName" name="lastName" type="text"
						class="form-control form-control-sm">
						
						<br> Email: <input id="email" name="email" type="text"
						class="form-control form-control-sm">
						
						<br> Specification: <input id="specification" name="specification" type="text"
						class="form-control form-control-sm">
						
						<br> Contact: <input id="contact" name="contact" type="text"
						class="form-control form-control-sm">
						
						<br> Work Date: <input id="workDate" name="workDate" type="text"
						class="form-control form-control-sm">
						
						<br> Work Time: <input id="workTime" name="workTime" type="text"
						class="form-control form-control-sm">
						
						<br> Password: <input id="password" name="password" type="text"
						class="form-control form-control-sm">
						
						<br> Admin ID: <input id="adminID" name="adminID" type="text"
						class="form-control form-control-sm">
						
						<br> Doctor Status: <input id="doctorStatus" name="doctorStatus" type="text"
						class="form-control form-control-sm">
						
						<br> Valid: <input id="valid" name="valid" type="text"
						class="form-control form-control-sm">
						
						
						 <br>
						  <input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary">
						 <input type="hidden" id="hiddoctorIDSave" name="hiddoctorIDSave" value="">
				</form>
				
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				
				<br>
				<div id="divItemsGrid">
					<%
						 Doctor doctor = new Doctor();
 						 out.print(doctor.readDoctors());
					 %>
				</div>
			</div>
		</div>
	</div>

</body>
</html>