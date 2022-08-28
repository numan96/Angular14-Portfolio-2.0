import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  events1: any[] = [];

  events2: any[] = [];
  constructor() {}

  ngOnInit() {
    this.events1 = [
      {
        status: 'WordPress Site Manager @ Vitz Ltd',
        date: 'Aug 2020 - Present',
        location: 'High Wycombe',
        icon: PrimeIcons.COG,
        color: '#FDC500',
        desc: 'Worked on creating the WordPress website whilst liaising with the company Director on the requirements of this project.',
        desc2:
          'More features will be worked on in the future and I continue to update/manage this website as requested.',
      },
      {
        status: 'Admin Support @ Fancensus',
        date: 'Aug 2018 - July 2019',
        location: 'Marlow',
        icon: PrimeIcons.FOLDER,
        color: '#23C7E9',
        desc: ' Inputting data into a custom system.',
        desc2: 'Validating data, checking its correct.',
        desc3: 'Training new employees on our custom system.',
        desc4: ' Researching Products.',
        desc5:
          'Troubleshooting problems that occur within the system regarding my duties.',
        desc6: 'General, ad hoc office administrative duties.',
      },
      {
        status: 'Retail Assistant @ Primark',
        date: 'Sep 2014 - Dec 2018',
        location: 'High Wycombe',
        icon: PrimeIcons.SHOPPING_BAG,
        color: '#61CFE1',
        desc: 'Assisting the operational team by delivering the best customer service I can within a fast paced environment.',
        desc2:
          'Working on the tillpoint including when it is the busiest period of the day.',
        desc3:
          'Tidying the shopfloor and helping customers with any queries they have.',
      },
    ];

    this.events2 = [
      {
        status: 'Bachelor of Science (BSc) Computer Science',
        date: '2014 - 2017',
        location: 'University of Westminster',
        icon: PrimeIcons.BOOK,
        color: '#000000',
        grade: 'Achieved First Class (1st)',
        desc: 'Deans List Student for First and Second Year (For achieving a level 4 and 5 results average total of 70%+)',
        desc2: 'Level 4 Average - 72.4%',
        desc3: 'Level 5 Average - 73%',
        desc4: 'Level 6 Average - 75%',
      },
      {
        status: 'GCSEs & A-Levels',
        date: '2007 - 2014',
        location: 'Sir William Ramsay School',
        icon: PrimeIcons.BOOK,
        color: '#000000',
        title1: 'GCSE Results:',
        desc: 'English Literature - B',
        desc2: 'Mathematics - B',
        desc3: 'Media Studies - B',
        desc4: 'Religious Studies - D',
        desc5: 'Additional Science - C',
        desc6: 'English Language - C',
        desc7: 'Citizenship Studies (Short course) - C',
        desc8: 'BTEC Business Studies - Merit',
        desc9: 'Certificate in Digital Applications (CiDA) - Pass',
        desc10: 'Extended Certificate in Digital Applications - Pass',
        title2: 'A-Level Results:',
        desc11: 'Information Technology - B',
        desc12: 'Media Studies - C',
        desc13: 'Certificate for Young Enteprise - Pass',
      },
    ];
  }
}
