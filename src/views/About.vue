<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/images/about1.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <h4 class="white--text">
          Intrusion Detection Specialist: Monitors networks, computers, and
          applications in large organizations, looking for events and traffic
          indicators that signal intrusion. Determines the damage caused by
          detected intrusions, identifies how an intrusion occurred, and
          recommends safeguards against similar intrusions. Also does
          penetration testing to identify vulnerabilities and recommend
          safeguards as preemptive measures. Computer Security Incident
          Responder: A member of team that prepares for and mounts rapid
          response to security threats and attacks such as viruses and
          denial-of-service attacks. Source Code Auditor: Reviews software
          source code to identify potential security issues and vulnerabilities
          that could be exploited by hackers to gain unauthorized access to data
          and system resources. Virus Technician: analyzes newly discovered
          computer viruses, and designs and develops software to defend against
          them. Penetration Tester (also known as Ethical Hacker or Assurance
          Validator): Not only scans for and identifies vulnerabilities, but
          exploits them to provide hard evidence that they are vulnerabilities.
          When penetration-testing, large infrastructures such as power grids,
          utility systems, and nuclear facilities, large teams of penetration
          testers, called Red Teams, are employed. Vulnerability Assessor: Scans
          for, identifies and assesses vulnerabilities in IT systems including
          computers, networks, software systems, information systems, and
          applications software.
        </h4>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="white--text text-center">Our Teams</h2>
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.id"
            class="d-flex child-flex"
            cols="12"
            sm="4"
          >
            <v-card flat tile class="mx-auto">
              <v-img
                :src="item.src"
                aspect-ratio="1"
                class="grey lighten-2"
              ></v-img>
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/team.jpg"),
          name: "Developer Team",
          title: "Development",
        },
        {
          id: 2,
          src: require("../assets/images/d.jpg"),
          name: "Network Installation Team",
          title: "Network Installation",
        },
        {
          id: 3,
          src: require("../assets/images/team.jpg"),
          name: "Network Security Team",
          title: "Network Security",
        },
         {
          id: 4,
          src: require("../assets/images/c.jpg"),
          name: "Intrusion Detection Team",
          title: "Intrusion Detection",
        },
        {
          id: 5,
          src: require("../assets/images/team.jpg"),
          name: "Penetration Testing Team",
          title: "Penetration Testing",
        },
         {
          id: 6,
          src: require("../assets/images/team.jpg"),
          name: "Vulnerability Assessor Team",
          title: "Vulnerability Assessor",
        },
      ],
    };
  },
};
</script>