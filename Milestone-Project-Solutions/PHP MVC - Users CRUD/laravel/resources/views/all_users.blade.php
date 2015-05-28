@extends('layout')

@section('main')
    <h1>All Users</h1>
    <table>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
    @foreach($users as $u)
    <tr>
        <td><a href="/users/{{ $u->id }}">{{  $u->fullname() }}</a></td>
        <td>{{ $u->email }}</td>
        <td>{{ $u->phone }}</td>
        <td><a href="/users/{{ $u->id }}/update">Edit</a></td>
        <td><a href="/users/{{ $u->id }}/delete">Delete</a></td>
    </tr>
    @endforeach
    </table>
    <div>
        <a href="/users/create">New User</a>
    </div>
@endsection