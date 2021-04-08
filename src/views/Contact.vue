
<template>
  <div >
    <v-snackbar
      v-model="snackbar"
      top
      right
      :timeout="5000"
      color="success"
    >
      <v-span class="mx-2 white--text"> {{ snackbar_message }}</v-span>
      <v-btn @click="snackbar = false" class="ml-16" text>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>

    <v-content>
      <div class="staticHero">
        <v-img src="../assets/images/about-us.jpg" height="500">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <v-container>
                <div class="headline center--text">Contact Us</div>
              </v-container>
            </v-col>
          </v-row>
        </v-img>
      </div>
      <div>
        <v-container>
          <h1 class="white--text">
            <strong> Leave us a Message here:</strong>
          </h1>
          <v-form ref="form" v-model="valid" @submit.prevent="sendEmail">
            <v-text-field
              prepend-icon="person"
              dark
              v-model="name"
              placeholder="Your Name."
              name="name"
              :counter="30"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              prepend-icon="email"
              dark
              v-model="email"
              placeholder="Your Email."
              name="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-textarea
              prepend-icon="message"
              dark
              v-model="message"
              placeholder="Your Message."
              name="message"
              :rules="messageRules"
              label="Message"
              required
            ></v-textarea>
            <div class="text-center">
             <v-btn
              color="#1216e0"
              :loading="loading"
              class="mx-2 white--text"
              align="right"
              type="submit"
              ><strong>Submit</strong>
            </v-btn>
            <v-btn  center color="error" class="mx-3" @click="reset"
              ><strong>Reset</strong>
            </v-btn>
            
            </div>
           
          </v-form>
        </v-container>
      </div>
       <div class="googlemap">
       <div style="width: 100%"><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=munich+(Adey%20Meselesh)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/route-planner.htm">Google Route Planner</a></div>
      </div>
    </v-content>
  </div>
</template>

<script>
// import emailjs from "emailjs-com";
export default {
  name: "Contact",
  data: () => ({
    valid: true,
    name: "",
    loading: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length >= 10) || "Message must be more than 10 characters",
    ],
    snackbar: false,
    snackbar_message: "",
  }),

  methods: {
    reset() {
      (this.name = ""), (this.message = ""), (this.email = "");
    },

    sendEmail(e) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        console.log(e.target);
        // emailjs
        //   .sendForm(
        //     "yareda",
        //     "template_y0zhtpb",
        //     e.target,
        //     "user_R2x03vVR1f0jOnj5E7j4X"
        //   )
       window.Email && window.Email.send({
          Host: "smtp.gmail.com",
          Username: "yared12707@gmail.com",
          Password: "pkouhixyojsqsqlg",
          To: "yared12707@gmail.com",
          From: this.email,
          Subject: `${this.name} sent you a message from ${this.email}`,
          Body: `Name: ${this.name} <br/> Email: ${this.email} <br/> Message:${this.message}`,
        }).then(
          (result) => {
            this.loading = false;
            console.log("SUCCESS!", result.status, result.text, result);
            this.snackbar_message = "Well Recieved And Thank You.";
            this.snackbar = true;
          },
          (error) => {
            console.log("check error",error);
            this.loading = false;
            this.snackbar_message = error;
            this.snackbar = true;
          }
        );

        
      }
      this.reset();
    },
  },
};
</script>




