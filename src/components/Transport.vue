<template>
    <div>

        <h2 id="transport_hotel" class="text-gray-600 mb-5 mt-5 text-3xl font-semibold text-center">{{ $t('transport_hotel_head_name') }}</h2>
        <div class="justify-center items-center flex ">
            <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_hotel_text') }}
                <a class="text-gray-600 font-bold" href="http://www.sluzby-mladost.sk/ubytovanie.html">
                    {{ $t('transport_hotel_link') }}
                </a>
            </p>
        </div>


        <h2 class="text-gray-600 mb-5 mt-5 text-3xl font-semibold text-center">{{ $t('transport_transport_head_name') }}</h2>
        <div class="grid sm:grid-cols-2 grid-cols-1">
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4 border border-gray-200">
                <div class="flex-none w-80"></div>
                <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/transport/train.png" alt="Program2">
                <div class="flex-grow w-auto">
                    <p class="font-bold text-base text-center ">{{ $t('transport_train_title') }}</p>
                    
                    <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_train_description') }}
                        <a class="text-gray-600 font-bold" href="https://predaj.zssk.sk/search">
                            {{ $t('transport_train_here') }}
                        </a>
                    </p>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4 border border-gray-200">
                <div class="flex-none w-80"></div>
                <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/transport/bus.png" alt="Program2">
                <div class="flex-grow w-auto w-96">
                    <p class="font-bold text-base text-center ">{{ $t('transport_bus_title') }}</p>
                    <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_bus_description') }}
                        <br><a class="text-gray-600 font-bold" href="https://mhdpo.sk/#/hladanie">
                            {{ $t('transport_bus_here') }}
                        </a>
                        <a class="text-gray-600 font-bold" href="https://play.google.com/store/apps/details?id=com.nolimit.sk.mhdpresov&hl=sk&gl=US">
                            {{ $t('transport_bus_app_android') }}
                        </a>
                        <a class="text-gray-600 font-bold" href="https://apps.apple.com/sk/app/mhd-pre%C5%A1ov/id1070714404">
                            {{ $t('transport_bus_app_ios') }}
                        </a>
                    </p>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4 border border-gray-200">
                <div class="flex-none w-80"></div>
                <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/transport/taxi.png" alt="Program2">
                <div class="flex-grow w-auto">
                    <p class="font-bold text-base text-center ">{{ $t('transport_taxi_title') }}</p>
                    <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_taxi_description') }}
                        <br><a class="text-gray-600 font-bold" href="https://www.alfataxipo.sk/">
                            {{ $t('transport_taxi_alfa') }}
                        </a>
                        <br><a class="text-gray-600 font-bold" href="https://www.prima-taxi.eu/cennik-sluzieb/">
                            {{ $t('transport_taxi_prima') }}
                        </a>
                        <br><a class="text-gray-600 font-bold" href="http://easytaxi.sk/presov/?sid=2">
                            {{ $t('transport_taxi_easy') }}
                        </a>
                        <br><a class="text-gray-600 font-bold" href="https://www.halotaxi.sk/cennik/">
                            {{ $t('transport_taxi_halo') }}
                        </a>
                    </p>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4 border border-gray-200">
                <div class="flex-none w-80"></div>
                <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/transport/scooter.png" alt="Program2">
                <div class="flex-grow w-auto">
                    <p class="font-bold text-base text-center ">{{ $t('transport_scooter_title') }}</p>
                    <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_scooter_description') }}
                        <br><a class="text-gray-600 font-bold" href="https://bolt.eu/sk/scooters/">
                            {{ $t('transport_scooter_web') }}
                        </a>
                        <a class="text-gray-600 font-bold" href="https://play.google.com/store/apps/details?id=ee.mtakso.client&referrer=af_tranid%3Db6s2C84E0E33h_sfcVTUbg%26shortlink%3Dd81f73c6%26pid%3Dwebsite%26af_force_deeplink%3Dtrue%26c%3DAndroid%20CTA%26af_dp%3Dtaxify%253A%252F%252F">
                            {{ $t('transport_scooter_android') }}
                        </a>
                        <a class="text-gray-600 font-bold" href="https://apps.apple.com/EE/app/id675033630?mt=8">
                            {{ $t('transport_scooter_ios') }}
                        </a>
                    </p>
                    
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-center items-center flex-col gap-4 p-4 border border-gray-200">
            <div class="flex-none w-80"></div>
            <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/transport/car.png" alt="Program2">
            <div class="flex-grow w-auto">
                <p class="font-bold text-base text-center ">{{ $t('transport_car_title') }}</p>
                <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_description') }}</p>
                <!-- <br><p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_red') }}</p>
                <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_orange') }}</p>
                <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_green') }}</p>
                <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_blue') }}</p>
                <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_sms') }}</p> -->
            </div>
                <!-- <img class="mb-8 flex-shrink h-96 shadow-2xl" src="@/assets/transport/parking.png" alt="Program2"> -->
            <div class="grid sm:grid-cols-2 grid-cols-1">
                <div class="flex flex-col justify-start items-center p-4">
                    <div class="grid gap-3 py-4">
                        <div class="p-4">
                            <img class="mb-8 flex-shrink h-96 shadow-2xl" src="@/assets/transport/parking.png" alt="Program2">
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center p-4">
                    <div class="grid gap-3 ">
                        <div class="p-4">
                            <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_red') }}</p>
                            <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_orange') }}</p>
                            <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_green') }}</p>
                            <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_blue') }}</p>
                            <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('transport_car_sms') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid sm:grid-cols-2 grid-cols-1">
            <div ref="trigger" class="flex flex-col justify-start items-center p-4 border border-gray-200">
                <div class="grid gap-3 ">
                    <div class="border-gray-200 p-4">
                        <p class="text-gray-700 font-bold text-base text-center mb-2">{{ $t('bigheader_ceremony') }}</p>
                        <p class="text-center text-base text-gray-700">{{ $t('bigheader_ceremony_start') }}</p>
                        <p class="text-center text-base text-gray-700">{{ $t('bigheader_ceremony_name') }}</p>
                        <p class="text-center text-base text-gray-700">{{ $t('bigheader_ceremony_address') }}</p>
                    </div>
                </div>
                <iframe class="w-full h-96 rounded-lg p-6" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJez6pv2LtPkcRqIohgRlaAFY&key=AIzaSyBB7-8kCFQadmanSMHH4oepuJDjnsxa0fg" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div ref="trigger2" class="flex flex-col justify-start items-center p-4 border border-gray-200">
                <div class="grid gap-3 py-4">
                    <div class="border-gray-100 P-4">
                        <p class="text-gray-700 font-bold text-base text-center mb-2">{{ $t('bigheader_reception') }}</p>
                        <p class="text-center text-base text-gray-700">{{ $t('bigheader_reception_start') }}</p>
                        <p class="text-center text-base text-gray-700">{{ $t('bigheader_reception_name') }}</p>
                        <p class="text-center text-base text-gray-700">{{ $t('bigheader_reception_address') }}</p>
                    </div>
                </div>
                <iframe class="w-full h-96 rounded-lg p-6" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9V08O4DyPkcRiI18g07e1os&key=AIzaSyBB7-8kCFQadmanSMHH4oepuJDjnsxa0fg" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</template>

<script>

export default {
}
</script>
