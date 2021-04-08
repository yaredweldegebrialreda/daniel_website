<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center white--text"><strong>Our Services </strong></h2>
      <v-row>
        <v-col v-for="item in webs" :key="item.id" cols="6">
          <v-card flat tile color="transparent">
            <v-img :src="item.src" aspect-ratio="2.0" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
          <v-col cols="12">
            <v-card flat color="transparent">
              <p class="white--text">
                {{ item.content }}
              </p>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h2 class="text-center white--text"><strong>Our Community</strong></h2>
      <v-row>
        <v-col
          v-for="m in mobiles"
          :key="m.id"
          class="d-flex child-flex"
          cols="6"
          sm="4"
        >
          <v-card flat tile>
            <v-img :src="m.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card flat color="transparent">
            <p class="white--text">
              {{ community_content }}
              {{ community_content }}
              {{ community_content }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h2 class="text-center white--text"><strong>Our productions</strong></h2>
      <v-row>
        <v-col
          v-for="d in deployment"
          :key="d.id"
          class="d-flex child-flex"
          cols="6"
          sm="4"
        >
          <v-card flat tile>
            <v-img :src="d.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card flat color="transparent">
            <p class="white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              deserunt excepturi beatae blanditiis facilis dicta cumque laborum
              modi ad reiciendis ab doloribus, numquam enim nihil quidem
              possimus rem, aspernatur eius.
            </p>
            <p class="white--text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis quia ut accusantium labore, incidunt, blanditiis
              similique in dolores ipsa vel id eos nobis sed, quo at illum iusto
              nostrum sit?
            </p>
            <p class="white--text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              aspernatur impedit consectetur eveniet nisi eos est officiis,
              perspiciatis sit ut assumenda amet fuga, ab dolorem corrupti, at
              vel aut. Architecto.
            </p>
            <p class="white--text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              vero soluta rem ullam modi porro autem quidem, incidunt rerum
              dolorum dicta voluptas hic maiores, sit saepe consequuntur
              exercitationem eveniet. Ratione?
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Technologies",
  data() {
    return {
      community_content:
        "When penetration-testing, large infrastructures such as power grids, utility systems, and nuclear facilities, large teams of penetration testers, called Red Teams, are employed. Vulnerability Assessor: Scans for, identifies and assesses vulnerabilities in IT systems including computers, networks, software systems, information systems, and applications software.",
      webs: [
        {
          id: 1,
          src: require("../assets/images/aa.jpg"),
          content:
            "Intrusion Detection Specialist: Monitors networks, computers, and applications in large organizations, looking for events and traffic indicators that signal intrusion. Determines the damage caused by detected intrusions, identifies how an intrusion occurred, and recommends safeguards against similar intrusions. Also does penetration testing to identify vulnerabilities and recommend safeguards as preemptive measures.",
        },
        // {
        //   id: 2,
        //   src: require("../assets/images/b.jpg")
        // },
        {
          id: 3,
          src: require("../assets/images/c.jpg"),
          content:
            "Computer Security Incident Responder: A member of team that prepares for and mounts rapid response to security threats and attacks such as viruses and denial-of-service attacks. Source Code Auditor: Reviews software source code to identify potential security issues and vulnerabilities that could be exploited by hackers to gain unauthorized access to data and system resources.",
        },
        {
          id: 4,
          src: require("../assets/images/d.jpg"),
          content:
            "Virus Technician: analyzes newly discovered computer viruses, and designs and develops software to defend against them. Penetration Tester (also known as Ethical Hacker or Assurance Validator): Not only scans for and identifies vulnerabilities, but exploits them to provide hard evidence that they are vulnerabilities. When penetration-testing, large infrastructures such as power grids, utility systems, and nuclear facilities, large teams of penetration testers, called Red Teams, are employed.",
        },
        // {
        //   id: 5,
        //   src: require("../assets/images/e.jpg")
        // },
        {
          id: 6,
          src: require("../assets/images/f.jpg"),
          content:
            "Vulnerability Assessor: Scans for, identifies and assesses vulnerabilities in IT systems including computers, networks, software systems, information systems, and applications software.",
        },
      ],
      mobiles: [
        {
          id: 1,
          src: require("../assets/images/2.jpg"),
          content:
            "Intrusion Detection Specialist: Monitors networks, computers, and applications in large organizations, looking for events and traffic indicators that signal intrusion. Determines the damage caused by detected intrusions, identifies how an intrusion occurred, and recommends safeguards against similar intrusions. Also does penetration testing to identify vulnerabilities and recommend safeguards as preemptive measures. Computer Security Incident Responder: A member of team that prepares for and mounts rapid response to security threats and attacks such as viruses and denial-of-service attacks. Source Code Auditor: Reviews software source code to identify potential security issues and vulnerabilities that could be exploited by hackers to gain unauthorized access to data and system resources.",
        },
      ],
      deployment: [
        {
          id: 1,
          src: require("../assets/images/f.jpg"),
          content:
            "When penetration-testing, large infrastructures such as power grids, utility systems, and nuclear facilities, large teams of penetration testers, called Red Teams, are employed. Vulnerability Assessor: Scans for, identifies and assesses vulnerabilities in IT systems including computers, networks, software systems, information systems, and applications software.",
        },
      ],
    };
  },
};
</script>