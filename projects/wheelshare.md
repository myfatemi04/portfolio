---
id: wheelshare
name: WheelShare
youtubeId: xQIsbsgVpas
githubLink: https://github.com/myfatemi04/wheelshare-frontend
images:
  - - file: "/img/projects/2020/coronavision/MainPage-Stats.png"
      alt: Live stats
    - file: "/img/projects/2020/coronavision/MainPage-Table.png"
      alt: Live data table
    - file: "/img/projects/2020/coronavision/Maps-WorldMap.png"
      alt: Choropleth map of cases
  - - file: "/img/projects/2020/coronavision/News.png"
      alt: News feed
    - file: "/img/projects/2020/coronavision/Charts-DailyTotal.png"
      alt: Chart showing the number of new cases per day
    - file: "/img/projects/2020/coronavision/Maps-Heatmap.png"
      alt: Heatmap of cases
  - - file: "/img/projects/2020/coronavision/Charts-Recoveries.png"
      alt: Chart showing the number of recoveries per day
    - file: "/img/projects/2020/coronavision/HowToHelp.png"
      alt: Page showing ways to help
  - - file: "/img/projects/2020/coronavision/Maps-CountyLevel.png"
      alt: Choropleth map at the county level
    - file: "/img/projects/2020/coronavision/Maps-ChooseFeature.png"
      alt: Maps were very flexible
blurb: "<h1></h1>"
---

/section blurb

With carpools being a necessity for after-school activities at my school, I made a website that helps people organize them. It has maps, route optimization, and community features. 300 people have used it.

/section content
Fun fact: This was originally a hackathon project!

I used [DigitalOcean](https://www.digitalocean.com/) to host the server and [Vercel](https://vercel.com/) to host the frontend static files.

# Carpool Discovery

Users can join private groups where community members can share events. An example of an event might be a sports practice or a home football game.

Whenever a user updates their registration for an event, it is automatically saved to the database. When they remove any information, records are deleted from the database accordingly.

Users can request to join carpools or invite other users to a carpool. When they do this, they receive an email notification. This was done with [SendGrid](https://sendgrid.com/).

# Coordinating Carpools

![Inside a carpool](/images/Carpool.png)

When a user joins a carpool, they can see the locations of other members of the carpool on a map. They can also see a route that optimizes for the minimum driving distance between passengers, as estimated by Great Circle Distance.
