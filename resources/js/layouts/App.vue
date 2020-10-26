    <style>
        .fade-enter-active{
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to{
            opacity : 0;
        }

        .ease-enter-active,.ease-leave-active{
            transition: opacity 2s;
        }
        .ease-enter, .ease-leave-to{
            opacity: 0;
        }
    </style>
    <template>
        <div>
            <!-- Navbar -->
            <nav class="navbar navbar-expand-sm navbar-light bg-white shadow-sm">
                <a href="#" @click.prevent="" class="navbar-brand">Laravue</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'home'}">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-link" :to="{name: 'about'}">
                                About
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-link" :to="{name: 'posts'}">
                                Posts
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>

        <!-- Content -->
        <div class="container">
            <transition name="fade">
                <router-view>

                </router-view>
            </transition>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>