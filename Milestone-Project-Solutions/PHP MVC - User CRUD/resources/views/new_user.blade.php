@extends('layout')

@section('main')
<h1>New User</h1>
<form action="/users/create" method="POST">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    <div>First Name: <input type="text" name="first_name"></div>
    <div>Last Name: <input type="text" name="last_name"></div>
    <div>Email: <input type="text" name="email"></div>
    <div>Phone: <input type="text" name="phone"></div>
    <button>Add User</button>
</form>
@endsection