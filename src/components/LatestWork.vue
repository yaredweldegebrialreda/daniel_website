<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center white--text"><strong>Our Latest Work</strong></h2>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="6" md="4">
          <v-card outlined class="mx-auto">
            <a
              href="https://www.google.com"
              target="_blank"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="item.src"
              >
                <v-card-title>{{ item.title }}</v-card-title>
              </v-img>
            </a>
            <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ item.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-expansion-panels>
                <v-expansion-panel >
                  <v-expansion-panel-header>More</v-expansion-panel-header>
                  <v-expansion-panel-content>
                     {{item.detail}}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <!-- </template> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LatestPost",
  data: () => ({
    show: false,
    items: [
      {
        id: 1,
        title: "Penetration Testing",
        subtitle: "Monitor Your Systems Here",
        description: "Technologies:Ethical hacking",
        detail:"  You can check the security threats of youy system and we will make you system secure and less vulnerable to possible threats. ",
        src: require("../assets/images/latest.jpg"),
      },
      {
        id: 2,
        title: "System Testing",
        subtitle: "Monitor Your Systems Here",
        description: "Technologies:Ethical hacking",
        detail:"When penetration-testing, large infrastructures such as power grids, utility systems, and nuclear facilities, large teams of penetration testers, called Red Teams, are employed. Vulnerability Assessor: Scans for, identifies and assesses vulnerabilities in IT systems including computers, networks, software systems, information systems, and applications software. ",
        src: require("../assets/images/f.jpg"),
      },
       {
        id: 3,
        title: "Network Testing",
        subtitle: "Monitor Your Systems Here",
        description: "Technologies:Ethical hacking",
        detail:"When penetration-testing, large infrastructures such as power grids, utility systems, and nuclear facilities, large teams of penetration testers, called Red Teams, are employed. Vulnerability Assessor: Scans for, identifies and assesses vulnerabilities in IT systems including computers, networks, software systems, information systems, and applications software. ",
        src: require("../assets/images/g.jpg"),
      },
    ],
  }),
};
</script>