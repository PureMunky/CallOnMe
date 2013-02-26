<%@ Page Title="" Language="VB" MasterPageFile="~/mp/Base.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="content" Runat="Server">
    <div class="container">
		<div class="lead">
			<p>Use the buttons below to pick someone to call on.</p>
			<h1 class="giant spaceAbove textCenter" data-call="name">Phil Corbett</h1>
			<div class="container spaceAbove primaryButtons">
				<div class="btn-group">
					<a class="btn btn-large" data-call="reload"><i class="icon-refresh"></i> Reload</a>
					<a class="btn btn-large btn-danger" data-call="skip"><i class="icon-remove"></i> Skip</a>
					<a class="btn btn-large" data-call="call">Next <i class="icon-chevron-right"></i></a>
				</div>
			</div>
		</div>
	</div>
</asp:Content>

