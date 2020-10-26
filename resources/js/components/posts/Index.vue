<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">POSTS</div>

                    <div class="card-body">
                        <router-link :to="{ name: 'create' }" class="btn btn-md btn-success">TAMBAH POST</router-link>

                        <div class="table-responsive mt-2">
                            <table class="table table-hover table-bordered">
                                <thead>
                                <tr>
                                    <th>Judul</th>
                                    <th>Konten</th>
                                    <th>Aksi</th>
                                </tr>
                                </thead>
                                <tbody name="fade" is="transition-group">
                                        <tr v-for="(post, index) in posts.data" :key="post.id">
                                            <td>{{ post.title }}</td>                                                
                                            <td>{{ post.content }}</td>                                                
                                            <td class="text-center">
                                                <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-sm btn-primary">EDIT</router-link>
                                                <button @click.prevent="PostDelete(post.id, index)" class="btn btn-sm btn-danger">HAPUS</button>
                                            </td>                       
                                        </tr>
                                </tbody>
                            </table>
                        </div>

                        <pagination :data="posts" @pagination-change-page="getResult"></pagination>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                posts: {}
            }
        },
        created() {
            // let uri = `http://localhost:8000/api/posts`;
            // this.axios.get(uri).then(response => {
            //     this.posts = response.data.data;
            // });
            this.getResult();
        },
        methods: {
            getResult(page){
 
            let uri = 'http://localhost:8000/api/posts?page=' + page;
            this.axios.get(uri).then(response => {
                    this.posts = response.data.data;
                    });
            },

            PostDelete(id, index)
            {
                this.axios.delete(`http://localhost:8000/api/posts/${id}`)
                    .then(response => {
                        this.posts.splice(index, 1);
                    }).catch(error => {
                    alert('system error!');
                });
            }
        }
    }
</script>