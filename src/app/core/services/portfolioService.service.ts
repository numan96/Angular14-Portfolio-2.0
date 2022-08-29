import { Injectable } from '@angular/core';
import { Project } from 'src/app/shared/portfolio-item/project.model';

@Injectable()
export class PortfolioService {
  projects: Project[] = [
    new Project(
      'portfolio-v1',
      'Angular Portfolio v1',
      'This is my first Portfolio website created with Angular 11, the goal was to highlight my personal and university projects to potential recruiters and employers. It contains pages for my Resume (which contains a PDF viewer to display it), a Portfolio hub and details page which details the projects with links to their Github and/or the live websites. It also contains a Contact page where you can view links to my LinkedIn and GitHub and submit a contact form which is sent to me via email. This was created with PC in mind, however, my current version of this portfolio (Angular Portfolio v2) has been rebuilt from the ground up for mobile first.',
      ['Angular 11', 'Angular Material', 'TypeScript', 'CSS', 'HTML'],
      [
        '/assets/PortfolioV1/ngportfolio1.png',
        '/assets/PortfolioV1/ngportfolio2.png',
        '/assets/PortfolioV1/ngportfolio3.png',
        '/assets/PortfolioV1/ngportfolio4.png',
      ],
      [],
      'https://github.com/numan96/Angular-Portfolio-1.0',
      '',
      { user: '', password: '' }
    ),

    new Project(
      'fitness-tracker',
      'Angular Fitness Tracker',
      'This is a fitness tracking application where users can sign up, login and start exercises. They choose from a set of exercises fetched from Firebase, users can cancel the exercise if they want and can view past exercises (completed or cancelled early and even filter search in any category) and we can even filter/sort these exercises. It uses a Firestore Database to store finished exercises and Authentication uses Firebase Auth. Angular Material component styling is used with a mobile first design in mind. ',
      [
        'Angular 13',
        'Angular Material',
        'TypeScript',
        'SCSS',
        'HTML',
        'Firebase Hosting',
        'Firebase Firestore',
        'Angularfire',
      ],
      [
        '/assets/FitnessTracker/ft1.png',
        '/assets/FitnessTracker/ft2.png',
        '/assets/FitnessTracker/ft3.png',
        '/assets/FitnessTracker/ft4.png',
        '/assets/FitnessTracker/ft5.png',
        '/assets/FitnessTracker/ft6.png',
        '/assets/FitnessTracker/ft7.png',
      ],
      [],
      'https://github.com/numan96/Angular-Fitness-Tracker',
      'https://ng-fitness-tracker-c9521.web.app/',
      { user: 'test@test.com', password: 'test123' }
    ),

    new Project(
      'e-commerce',
      'Angular E-commerce Application',
      'This was for a recruitment stage where I had to complete a technical task. The task was to create a web application that displays products, similar to many ecommerce apps and websites. All requirements were implemented and feedback was all very positive. Design choices and the dependencies used can be found in the README.md file within GitHub. They liked me to use the Angular framework, but apart from that it was up to me to make sensible decisions about the design and development. The products must be dynamic, using data from an API which they had provided.',
      [
        'Angular 13',
        'Angular Material',
        'TypeScript',
        'CSS',
        'HTML',
        'Angularfire Hosting',
        'Angular Flex-Layout',
        'API',
      ],
      [
        '/assets/ecommerce/ecommerce1.png',
        '/assets/ecommerce/ecommerce2.png',
        '/assets/ecommerce/ecommerce3.png',
        '/assets/ecommerce/ecommerce4.png',
        '/assets/ecommerce/ecommerce5.png',
        '/assets/ecommerce/ecommerce6.png',
        '/assets/ecommerce/ecommerce7.png',
        '/assets/ecommerce/ecommerce8.png',
        '/assets/ecommerce/ecommerce9.png',
      ],
      [],
      'https://github.com/numan96/Angular-One-Iota-Task',
      'https://ng-numan-oneiota-task.web.app/products',
      { user: '', password: '' }
    ),

    new Project(
      'film-tracker',
      'Angular NgRx Film Tracker',
      'A film tracking application built using NgRx and TMDB API. All data including authentication by the user was created using Firebase. Users can favourite or set films as watched, also look at film details and search dynamically for any film of their choosing. In my specification before the project, I aimed to allow users to view films and more details without authenticating, once authenticated however, they could add films to their watched lists and favourites list (accessible with the person icon top right of the nav bar) to keep track of which films that might be upcoming they want to watch or to track which films they have watched already (including the date which they have watched them). I also aimed to have a search bar that was in the navigation bar accessable anywhere on the website. I also wished to have a layout for mobile and PC which I achieved.',
      [
        'Angular 13',
        'Angular Material',
        'TypeScript',
        'SASS',
        'HTML',
        'Firebase',
        'NgRx',
        'API',
      ],
      [
        '/assets/Flixible/Flixible1.jpg',
        '/assets/Flixible/Flixible2.jpg',
        '/assets/Flixible/Flixible3.jpg',
        '/assets/Flixible/Flixible4.jpg',
        '/assets/Flixible/Flixible5.jpg',
        '/assets/Flixible/Flixible6.jpg',
        '/assets/Flixible/Flixible8.jpg',
        '/assets/Flixible/Flixible9.jpg',
        '/assets/Flixible/Flixible10.png',
        '/assets/Flixible/Flixible12.png',
        '/assets/Flixible/Flixible13.png',
        '/assets/Flixible/Flixible14.jpg',
      ],
      [],
      'https://github.com/numan96/Angular-Film-Tracking-Website',
      'https://ng-flixible.web.app/films/',
      { user: 'test@test.com', password: 'test123' }
    ),

    new Project(
      'ng-course-project',
      'Angular Course CRUD Project',
      'A project that allowed me to practice things I have learnt throughout this Angular Complete Guide 2022 Edition course on Udemy. Covering topics such as: Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: I learnt how to deploy an application! The website implemented NgRx in the end and is a recipe book website, where users can manage recipes (click Manage in the top right once signed in -> Fetch Data) and be able to add ingredients of the recipe to a shopping list and add/edit/delete recipes. The changes to the recipes can be saved in the Manage tab (Save Data) which is updated in the Firebase DB. Users are also able to edit the shopping list by changing quantities and deleting ingredients. For a detailed look at implemented Angular features, please feel free to view the GitHub project. A link to the Course Completion Certificate can be found on my Resume.',
      [
        'Angular 11',
        'Bootstrap',
        'TypeScript',
        'NgRx',
        'CSS',
        'HTML',
        'Firebase',
      ],
      [
        '/assets/CourseProject/ngproject3.png',
        '/assets/CourseProject/ngproject1.png',
        '/assets/CourseProject/ngproject2.png',
        '/assets/CourseProject/ngproject4.png',
        '/assets/CourseProject/ngproject5.png',
      ],
      [],
      'https://github.com/numan96/Angular-CRUD-Recipe-Book',
      'https://ng-course-recipe-book-4243a.web.app/auth',
      { user: 'test@test.com', password: 'test123' }
    ),

    new Project(
      'vitz-2.0-website',
      'Vitz 2.0 WordPress Website',
      'Created a new reworked WordPress website that better matched the branding of the business, with the aim of it driving more sales from the websites store. A new product launched simultaneously with the website which we wanted to bring to life with vibrant colours that matched the packaging. The website contains a blog, an About Us page and a E-commerce store with a shopping basket, allowing for payments by card. Making the website more interactive was the goal and we achieved that through a more engaging design with alot of videos, images, animations and interactive WordPress components from the editor used (WPBakery). ',
      ['WordPress', 'CSS'],
      [
        '/assets/VitzWebsite2/vitz2-1.png',
        '/assets/VitzWebsite2/vitz2-2.png',
        '/assets/VitzWebsite2/vitz2-3.png',
      ],
      ['/assets/VitzWebsite2/BEFORE.mp4'],
      '',
      'https://vitzltd.co.uk/',
      { user: '', password: '' }
    ),

    new Project(
      'vitz-website',
      'Vitz WordPress Website',
      'Created and managed the WordPress website for a start-up business, everything from designing an appealing website to creating the online store, liaising with the CEO to gather the website requirements and adding new features when required and testing them before launch. Also responsible for some of the web graphics displayed using PhotoShop and Canva.',
      ['WordPress', 'CSS', 'Photoshop'],
      [
        '/assets/VitzWebsite/vitz-1.png',
        '/assets/VitzWebsite/vitz-2.png',
        '/assets/VitzWebsite/vitz-3.png',
        '/assets/VitzWebsite/vitz-4.gif',
        '/assets/VitzWebsite/VitzStore.gif',
      ],
      [],
      '',
      '',
      { user: '', password: '' }
    ),

    new Project(
      'ar-maths-android-app',
      'AR Maths Android App',
      'An android mathematics application with a target user age of 6 to 12 years old, aimed to educate the user through interaction and viewing of digital media using Augmented Reality technology. This was created for my Final Year Project at University. Features included a dynamic AR leaderboard based on the classroom/group the user was a part of allowing them to compete for domination and an AR quiz which required user responses through the camera to answer questions. This application has an android UI with Unity activities which send and receive data from each other to dynamically store points and other user information. Documentation can be found at the GitHub repository.',
      [
        'Android Studio',
        'C#',
        'Java',
        'Unity Engine',
        'PHPMyAdmin',
        'Google Volley',
      ],
      [
        '/assets/ARApp/fyp1.png',
        '/assets/ARApp/fyp2.png',
        '/assets/ARApp/fyp3.png',
        '/assets/ARApp/fyp4.png',
      ],
      [],
      'https://github.com/numan96/Augmented-Reality-Android-Maths-Application',
      '',
      { user: '', password: '' }
    ),

    new Project(
      'reddit-clone',
      'CodeIgniter Reddit Clone',
      'Using CodeIgniter to implement a MVC (Model, View, Controller) website, this website allowed for users to post threads and discuss them, with a fully functioning login system, commenting system and upvoting/downvoting feature similar to reddit.',
      [
        'Rest API',
        'AJAX',
        'JSON',
        'HTML',
        'PHP (CodeIgniter)',
        'CSS (BootStrap)',
        'JavaScript',
        'jQuery',
      ],
      [
        '/assets/RedditClone/advanced1.png',
        '/assets/RedditClone/advanced2.png',
        '/assets/RedditClone/advanced3.png',
      ],
      [],
      'https://github.com/numan96/Reddit-Clone-Website',
      '',
      { user: '', password: '' }
    ),

    new Project(
      'jquery-treasure-hunt',
      'jQuery Treasure Hunt App',
      'A treasure hunt jQuery based web application that provided information and promoted a clients venue, the user would choose a start destination and a final venue destination and based on their options, a GPS route would be shown with markers throughout their trip where they played games in order to learn more about the venue and earn rewards for them whilst they travel to the location. Features included a booking system, a points system, a newsletter and a dynamic favourite venues list.',
      [
        'PHP',
        'Rest API',
        'AJAX',
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'PHPMyAdmin',
      ],
      [
        '/assets/TreasureHunt/TreasureHunt1.png',
        '/assets/TreasureHunt/TreasureHunt2.png',
        '/assets/TreasureHunt/TreasureHunt3.png',
        '/assets/TreasureHunt/TreasureHunt4.png',
      ],
      [],
      'https://github.com/numan96/Treasure-Hunt-jQuery-Project',
      '',
      { user: '', password: '' }
    ),

    new Project(
      'charity-football-poster',
      'Charity Football Poster',
      'Using Photoshop, I created a charity football tournament poster that was designed to promote the event locally within my community and online via social media, in collaboration with a mutual friend working at the organisation hosting the tournament.',
      ['PhotoShop'],
      ['/assets/FootballPoster/FootballPosterNM.png'],
      [],
      '',
      '',
      { user: '', password: '' }
    ),
  ];

  constructor() {}

  public getProjects() {
    return this.projects;
  }

  getPortfolioItem(id: string) {
    var project = this.projects.find((s) => {
      return s.projectSlug === id;
    });
    return project as Project;
  }
}
