@extends('layout')

@section('main')
<h1>View User</h1>
<div>Name: {{ $user->fullname() }}</div>
<div>Email: {{ $user->email }}</div>
<div>Phone: {{ $user->phone }}</div>
<div>
    <a href="/users/{{ $user->id }}/update">Edit</a>
    <a href="/users/{{ $user->id }}/delete">Delete</a>
</div>
@endsection