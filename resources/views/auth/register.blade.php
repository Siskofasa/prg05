@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Register') }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                                <div class="col-md-6">
                                    <input id="name" type="text"
                                           class="form-control @error('name') is-invalid @enderror" name="name"
                                           value="{{ old('name') }}" required autocomplete="name" autofocus>

                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <!---Extra added parts of the form --->

                            <div class="form-group row">
                                <label for="age" class="col-md-4 col-form-label text-md-right">{{ __('Age') }}</label>

                                <div class="col-md-6">
                                    <input id="age" type="text" class="form-control @error('age') is-invalid @enderror"
                                           name="age" value="{{ old('age') }}" required autocomplete="age" autofocus>

                                    @error('age')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="skill-level"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Skill Level') }}</label>

                                <div class="col-md-6">
                                    <select class="form-control @error('skill-level') is-invalid @enderror"
                                            id="skill-level" name="skill-level" required>
                                        <option value="beginner">1</option>
                                        <option value="intermediate">2</option>
                                        <option value="expert">3</option>
                                    </select>
{{--                                    <input id="skill-level" type="text"--}}
{{--                                           class="form-control @error('skill-level') is-invalid @enderror"--}}
{{--                                           name="skill-level" value="{{ old('skill-level') }}" required--}}
{{--                                           autocomplete="skill-level" autofocus>--}}

{{--                                    @error('skill-level')--}}
{{--                                    <span class="invalid-feedback" role="alert">--}}
{{--                                        <strong>{{ $message }}</strong>--}}
{{--                                    </span>--}}
{{--                                    @enderror--}}
                                </div>
                            </div>

{{--                            <div class="form-group row">--}}
{{--                                 <label for="skill-level" class="col-md-4 col-form-label text-md-right">{{ __('Group') }}</label>--}}

{{--                                 <div class="col-md-6">--}}
{{--                                    <input id="group" type="text" class="form-control @error('group') is-invalid @enderror" name="group" value="{{ old('group') }}" required autocomplete="group" autofocus>--}}

{{--                                    @error('group')--}}
{{--                                        <span class="invalid-feedback" role="alert">--}}
{{--                                            <strong>{{ $message }}</strong>--}}
{{--                                        </span>--}}
{{--                                    @enderror--}}
{{--                                 </div>--}}
{{--                            </div>--}}


                            <!-- End of added extra parts --->

                            <div class="form-group row">
                                <label for="email"
                                       class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                <div class="col-md-6">
                                    <input id="email" type="email"
                                           class="form-control @error('email') is-invalid @enderror" name="email"
                                           value="{{ old('email') }}" required autocomplete="email">

                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                                <div class="col-md-6">
                                    <input id="password" type="password"
                                           class="form-control @error('password') is-invalid @enderror" name="password"
                                           required autocomplete="new-password">

                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control"
                                           name="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Register') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
