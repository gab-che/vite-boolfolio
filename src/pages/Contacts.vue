<script>
    import { store, sendFormData } from '../store';
    export default{
        name: 'Contacts',
        data(){
            return{
                store,
                form: {
                    title: '',
                    email: '',
                    name: '',
                    message: '',
                    attachment: '',
                }
            }
        },

        methods: {
            formSubmit(){
                const formData = new FormData();
                formData.append('title', this.form.title);
                formData.append('email', this.form.email);
                formData.append('name', this.form.name);
                formData.append('message', this.form.message);
                formData.append('attachment', this.form.attachment);

                sendFormData(formData)
            },

            fileUpload(e){
                this.form.attachment = e.target.files[0];
            }
        }
    }
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-md-10 col-lg-8 m-auto">
                <h2 class="mb-5">Form contatti</h2>

                <div class="alert alert-success" v-if="store.submitResponse === 'yay'">
                    Dati inviati! :')
                </div>

                <div class="alert alert-danger" v-else-if="store.submitResponse">
                    Dati non inviati :'( <br>
                    Messaggio: {{ store.submitResponse }}
                </div>

                <form action="POST" @submit.prevent="formSubmit" class="row g-3">
                    <div class="col-md-6">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" v-model="form.name">
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="email" v-model="form.email">
                    </div>
                    <div class="col-md-8">
                        <label for="title" class="form-label">Titolo</label>
                        <input type="text" class="form-control" id="title" v-model="form.title">
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="attachment" class="form-label">Allegato</label>
                            <input class="form-control" id="attachment" type="file" @change="fileUpload">
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="message" class="form-label">Messaggio</label>
                        <textarea id="message" rows="4" class="form-control" v-model="form.message"></textarea>
                    </div>

                    <div class="d-flex gap-3">
                        <button class="btn btn-outline-success">Invia</button>
                        <button class="btn btn-outline-secondary" typeof="reset">Annulla</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../style/main.scss';
</style>