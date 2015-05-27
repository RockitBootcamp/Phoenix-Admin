@extends('layout')

@section('main')
<h1>Edit User</h1>
<form action="/users/{{ $user->id }}/update" method="POST">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    {{-- <div><input type="hidden" name="id" value="{{ $user->id }}"></div> --}}
    <div>First Name: <input type="text" name="first_name" value="{{ $user->first_name }}"></div>
    <div>Last Name: <input type="text" name="last_name" value="{{ $user->last_name }}"></div>
    <div>Email: <input type="text" name="email" value="{{ $user->email }}"></div>
    <div>Phone: <input type="text" name="phone" value="{{ $user->phone }}"></div>
    <button>Update User</button>
</form>
@endsection