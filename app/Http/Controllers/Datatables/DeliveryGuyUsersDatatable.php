<?php

namespace App\Http\Controllers\Datatables;

use App\User;
use Carbon\Carbon;
use Yajra\DataTables\DataTables;

class DeliveryGuyUsersDatatable
{
    public function deliveryGuyUsersDatatable()
    {
        $users = User::role('Delivery Guy')->with('wallet');

        return Datatables::of($users)
            ->addColumn('wallet', function ($user) {
                return config('appSettings.currencyFormat') . $user->balanceFloat;
            })
            ->editColumn('created_at', function ($user) {
                return '<span data-popup="tooltip" data-placement="left" title="' . $user->created_at->diffForHumans() . '">' . $user->created_at->format('Y-m-d - h:i A') . '</span>';
            })
            ->addColumn('action', function ($user) {
                return '<div class="btn-group btn-group-justified"> <a href="' . route('admin.get.manageDeliveryGuysRestaurants', $user->id) . '" class="btn btn-sm btn-secondary mr-2"> Manage Delivery Stores</a> <a href="' . route('admin.get.editUser', $user->id) . '" class="btn btn-sm btn-primary"> View</a> </div>';
            })
            ->rawColumns(['action', 'created_at'])
            ->make(true);

    }
}
