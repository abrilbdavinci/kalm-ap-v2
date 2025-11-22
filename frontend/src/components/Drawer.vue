<script>
import { currentUser } from '../main';

export default {
    name: 'Drawer'
}
</script>

<template>
    <div class="drawer-side z-50">
        <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="menu bg-base-200 min-h-full w-80 p-0 rounded-l-4xl flex flex-col justify-between">
            <div>
                <div class="flex flex-col border-b p-5 pt-10 border-(--kälm-lighter)">
                    <label for="my-drawer-1" class="self-start cursor-pointer" aria-label="close sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>
                    </label>
                    <div class="flex justify-between mt-4">
                        <div>
                            <p class="text-md text-(--kälm-light)">Hola,</p>
                            <h2 class="text-3xl text-(--kälm-dark)">{{ currentUser?.name }}Usuario!</h2>
                        </div>
                        <img src="/src/assets/img/pfp.svg" alt="usuario" class="h-10 w-auto rounded-full object-cover">
                    </div>
                    <div class="flex justify-between text-(--kälm-light)">
                        <p>@{{ currentUser?.name }}</p>
                        <p>{{ currentUser?.followers }}?? seguidores</p>
                    </div>
                </div>
            <ul class="p-4 gap-3">
                <li class="flex flex-row text-lg text-(--kälm-text)">
                        <RouterLink class="w-full justify-between items-center hover:bg-transparent" to="/perfil">
                            Mi Perfil
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#306067" class="p-0"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z"/></svg>
                        </RouterLink>
                        
                </li>
                <li class="flex flex-row text-lg text-(--kälm-text)">
                    <RouterLink class="w-full justify-between items-center hover:bg-transparent" to="/">
                        Tests
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#306067" class="p-0"><path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Z"/></svg>
                    </RouterLink>
                </li>
                <li class="flex flex-row text-lg text-(--kälm-text)">
                    <RouterLink class="w-full justify-between items-center hover:bg-transparent" to="/">
                        Mis Resultados
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#306067" class="p-0"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-160h200q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160h320q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Z"/></svg>
                    </RouterLink>
                </li>
                <li class="flex flex-row text-lg text-(--kälm-text)">
                    <RouterLink class="w-full justify-between items-center hover:bg-transparent" to="/">
                        Favoritos
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#306067" class="p-0"><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z"/></svg>
                    </RouterLink>
                </li>
                <li class="flex flex-row text-lg text-(--kälm-text)">
                    <RouterLink class="w-full justify-between items-center hover:bg-transparent" to="/">
                        Configuración
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#306067" class="p-0"><path d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm49-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"/></svg>
                    </RouterLink>
                </li>
                <li class="flex flex-row text-lg text-(--kälm-text)">
                    <RouterLink class="w-full justify-between items-center hover:bg-transparent" to="/">
                        Ayuda
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#306067" class="p-0"><path d="M470-200h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 134-75.5 249T534-111q-10 5-20 5.5t-18-4.5q-8-5-14-13t-7-19l-5-58Zm-11-121q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-87-304q11 5 22 .5t18-14.5q9-12 21-18.5t27-6.5q24 0 39 13.5t15 34.5q0 13-7.5 26T480-558q-25 22-37 41.5T431-477q0 12 8.5 20.5T460-448q12 0 20-9t12-21q5-17 18-31t24-25q21-21 31.5-42t10.5-42q0-46-31.5-74T460-720q-32 0-59 15.5T357-662q-6 11-1.5 21.5T372-625Z"/></svg>
                    </RouterLink>
                </li>
            </ul>
            </div>

            <ul class="p-4">
                <li class="flex flex-row text-lg text-(--kälm-text)">
                    <RouterLink class="w-full justify-between items-center hover:bg-transparent" to="/">
                        Sobre Kälm
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#306067"><path d="M480-280q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
                    </RouterLink>
                </li>
                <li class="flex flex-row text-lg text-(--kälm-text)">
                    <a class="w-full justify-between items-center hover:bg-transparent" @click="logout">
                        Cerrar sesión
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#306067" class="p-0"><path d="M200-480q0 106 69 185t174 93q16 2 26.5 14t10.5 28q0 17-14.5 28t-32.5 9q-135-17-224-118.5T120-480q0-136 88.5-237.5T432-837q19-2 33.5 8.5T480-800q0 16-10.5 28T443-758q-105 14-174 93t-69 185Zm487 40H400q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h287l-75-75q-12-12-12-28.5t12-28.5q12-12 28-12t28 12l144 144q12 12 12 28t-12 28L668-308q-12 12-28 11.5T612-309q-12-12-12-28t12-28l75-75Z"/></svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>