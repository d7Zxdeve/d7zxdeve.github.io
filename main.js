(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"hide-on-small-only\">\n  <ul class=\"side-nav fixed section table-of-contents\">\n    <li class=\"logo\">\n      <a id=\"logo-container\"\n         aria-label=\"Navigate to the beginning of the page\"\n         href=\"#intro\"\n         class=\"brand-logo teal-text\">\n        <h1>\n          Naresh Yella\n          <span class=\"brown-text light\">\n          Full Stack Developer\n        </span>\n        </h1>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the About section\"\n         href=\"#about\"\n         class=\"waves-effect waves-dark teal-text\">\n        <i class=\"mdi-social-person small\"></i>\n        <span>\n          About\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the Experience section\"\n         href=\"#experience\"\n         class=\"waves-effect waves-dark cyan-text\">\n        <i class=\"mdi-action-trending-up small\"></i>\n        <span>\n          Experience\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the Skills section\"\n         href=\"#skills\"\n         class=\"waves-effect waves-dark purple-text\">\n        <i class=\"mdi-av-equalizer small\"></i>\n        <span>\n          Skills\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the Education section\"\n         href=\"#education\"\n         class=\"waves-effect waves-dark orange-text\">\n        <i class=\"mdi-social-school small\"></i>\n        <span>\n          Education\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the Contact section\"\n         href=\"#contact\"\n         class=\"waves-effect waves-dark brown-text\">\n        <i class=\"mdi-content-mail small\"></i>\n        <span>\n          Contact\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Open Naresh's resume in a new tab\"\n         href=\"../assets/resume/Resume.pdf\"\n         target=\"_blank\"\n         class=\"waves-effect waves-dark grey-text text-darken-3\">\n        <i class=\"mdi-action-description small\"></i>\n        <span>\n          Resume\n        </span>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n<nav class=\"hide-on-large only trigger z-depth-1\">\n  <a aria-label=\"Toggle visibility of the mobile navbar\"\n     href=\"#\"\n     data-activates=\"slide-out\"\n     class=\"button-collapse\">\n    <i class=\"mdi-navigation-menu\"></i>\n  </a>\n  <div class=\"name-title\">\n    <a id=\"name\"\n       aria-label=\"Navigate to the beginning of the page\"\n       href=\"#main\"\n       class=\"teal-text\">\n      Naresh Yella\n    </a>\n    <span class=\"brown-text light\">\n      Full Stack Developer\n    </span>\n  </div>\n</nav>\n\n<nav class=\"hide-on-large only\">\n  <ul id=\"slide-out\" class=\"side-nav\">\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the About section\"\n         href=\"#about\"\n         class=\"waves-effect waves-dark teal-text\">\n        <i class=\"mdi-social-person small\"></i>\n        <span>\n          About\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the Experience section\"\n         href=\"#experience\"\n         class=\"waves-effect waves-dark cyan-text\">\n        <i class=\"mdi-action-trending-up small\"></i>\n        <span>\n          Experience\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the Skills section\"\n         href=\"#skills\"\n         class=\"waves-effect waves-dark purple-text\">\n        <i class=\"mdi-av-equalizer small\"></i>\n        <span>\n          Skills\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the Education section\"\n         href=\"#education\"\n         class=\"waves-effect waves-dark orange-text\">\n        <i class=\"mdi-social-school small\"></i>\n        <span>\n          Education\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Navigate to the Contact section\"\n         href=\"#contact\"\n         class=\"waves-effect waves-dark brown-text\">\n        <i class=\"mdi-content-mail small\"></i>\n        <span>\n          Contact\n        </span>\n      </a>\n    </li>\n    <li class=\"bold\">\n      <a aria-label=\"Open Naresh's resume in a new tab\"\n         href=\"../assets/resume/Resume.pdf\"\n         target=\"_blank\"\n         class=\"waves-effect waves-dark grey-text text-darken-3\">\n        <i class=\"mdi-action-description small\"></i>\n        <span>\n          Resume\n        </span>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n<main>\n  <section id=\"intro\" class=\"section scrollspy full-height\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <h2>I want to <span class=\"teal\">make things</span><br>that <span class=\"underline\">make a difference</span>.</h2>\n    </div>\n  </section>\n  <section id=\"about\" class=\"section scrollspy\">\n    <h3 class=\"page-title white-text teal\">About</h3>\n    <div class=\"container flow-text\">\n      <blockquote>\n        <h2>Mission-driven full stack developer with a passion for thoughtful UI design, collaboration.</h2>\n      </blockquote>\n      <p>I’ve always seek out opportunities and challenges that are meaningful to me. Although my professional path has\n        taken many twists and turns. I've never stopped engaging my passion to help others and solve problems.</p>\n      <p>As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and\n        my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a\n        high growth company.</p>\n    </div>\n  </section>\n  <section id=\"experience\" class=\"section scrollspy\">\n    <h3 class=\"page-title white-text teal\">Experience</h3>\n    <div class=\"container\">\n\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col s12 m2\">\n              <img alt=\"Commscope logo\"\n                   src=\"../assets/commscope.png\"\n                   class=\"responsive-img center-block\">\n            </div>\n            <div class=\"col s12 m10\">\n              <p>\n                <span class=\"card-title teal-text hoverline\">\n                  CommScope\n                </span>\n              </p>\n            </div>\n          </div>\n          <div class=\"role brown-text\">\n            Full-Stack Software Developer\n          </div>\n          <h6>Description</h6>\n          <ul>\n            <li>Spectrum is the application of managing the Frequency Bandwidths for the various telecommunication\n              companies like T-Mobile, At&t.\n            </li>\n            <li>In this application we focused on CBSD, DPA, Portal DPA which helps to the users with various analytics\n              reports.\n            </li>\n            <li>In this application we have 4 different roles Super, Admin, CPI and finally Standard users.</li>\n          </ul>\n        </div>\n        <div class=\"card-action\">\n          <span>April 2019 - Present | Ashburn, VA</span>\n        </div>\n      </div>\n\n      <!-- Need to work from here-->\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col s12 m2\">\n              <img alt=\"Nike logo\"\n                   src=\"../assets/nike.png\"\n                   class=\"responsive-img center-block\">\n            </div>\n            <div class=\"col s12 m10\">\n              <p>\n                <span class=\"card-title teal-text hoverline\">\n                  Nike\n                </span>\n              </p>\n            </div>\n          </div>\n          <div class=\"role brown-text\">Sr. Front-End Developer</div>\n          <h6>Description</h6>\n          <ul>\n            <li>Crate is the application of Content Management which helps to the entire Nike digital marketing.</li>\n            <li>There are 3 major components in the application.</li>\n            <li>Team Library which can use to collaborate with in their own team or cross-functionally or with external\n              partners.\n            </li>\n            <li>Distribution Library will handle when content is ready to share with users, they are moved to\n              distribution library.\n            </li>\n            <li>Public Library/Internal Use after marketing is done with the content will move to public library which\n              Nike use for presentations and posters.\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-action\">\n          <span>May 2018 - Febuary 2019 | Portland, OR</span>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col s12 m2\">\n              <img alt=\"QSSI logo\"\n                   src=\"../assets/qssi.png\"\n                   class=\"responsive-img center-block\">\n            </div>\n            <div class=\"col s12 m10\">\n              <p>\n                <span class=\"card-title teal-text hoverline\">\n                  QSSI\n                </span>\n              </p>\n            </div>\n          </div>\n          <div class=\"role brown-text\">Full Stack Java Developer</div>\n          <h6>Description</h6>\n          <ul>\n            <li>Aligned Monitoring System (AMS) application helps to Office of Head Start to create Survey, Reviews and\n              Reports on Grantees.\n            </li>\n            <li>It mainly 2 components those are Review Form creation and Report generation depends on Survey\n              information.\n            </li>\n            <li>The final version of this project is Report generation on Grantees and submits the final report to\n              Federal Government.\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-action\"><span>November 2016 - March 2018 | Columbia, MD</span></div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col s12 m2\">\n              <img alt=\"Southwest Airlines logo\"\n                   src=\"../assets/sw.png\"\n                   class=\"responsive-img center-block\">\n            </div>\n            <div class=\"col s12 m10\">\n              <p>\n                <span class=\"card-title teal-text hoverline\">\n                  Southwest Airlines\n                </span>\n              </p>\n            </div>\n          </div>\n          <div class=\"role brown-text\">Sr. Java Developer</div>\n          <h6>Description</h6>\n          <ul>\n            <li>RefundPro application helps South West Airline to create and process claims for passenger tickets,\n              reimbursements and generate rule based automated refunds.\n            </li>\n            <li> It mainly contains 3 components those are RefundPro Web Application, RefundPro Services Platform, and\n              Refunds Batch Process.\n            </li>\n            <li>Users can perform Search claims, manually create refund claims, Process claims (approve, suspend or\n              deny) etc., assigning privileges to user, refund correspondence and print Correspondence.\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-action\"><span>January 2016 - October 2016 | Dallas, TX</span></div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col s12 m2\">\n              <img alt=\"Startup Institute logo\"\n                   src=\"../assets/cnbc.png\"\n                   class=\"responsive-img center-block\"\n                   style=\"height: 50px !important;\">\n            </div>\n            <div class=\"col s12 m10\">\n              <p>\n                <span class=\"card-title teal-text hoverline\">\n                  CNBC\n                </span>\n              </p>\n            </div>\n          </div>\n          <div class=\"role brown-text\">Sr. Java J2EE Developer</div>\n          <h6>Description</h6>\n          <ul>\n            <li>Global Market Reporting Project is to provide a single sign on platform with integrated data store to\n              generate reports for all clients facing application of the Global Markets Line of Business of Bank of New\n              York Mellon.\n            </li>\n            <li>This involves data analysis and business process understanding of all Global Market Applications.</li>\n            <li>It captures the data related to given below business processes associated with currency trades in the\n              Global Markets.\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-action\"><span>May 2015 - December 2015 | Englewood Cliffs, NJ</span></div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col s12 m2\">\n              <img alt=\"Om Info logo\"\n                   src=\"../assets/ominfo.png\"\n                   class=\"responsive-img center-block\"\n                   style=\"height: 50px !important;\">\n            </div>\n            <div class=\"col s12 m10\">\n              <p>\n                <span class=\"card-title teal-text hoverline\">\n                  OM Info Services\n                </span>\n              </p>\n            </div>\n          </div>\n          <div class=\"role brown-text\">Java Developer</div>\n          <h6>Description</h6>\n          <ul>\n            <li>FRANK’s international maintains its employee details and calculates their payrolls.</li>\n            <li>It consists of different modules like Employee Manager, Leaves Information, Salary Calculation and\n              Reports.\n            </li>\n            <li>Employee manager stores information of all employees.</li>\n            <li>Separate modules were developed for allowances and deductions.</li>\n            <li>The Leaves Information module keeps track of employee leaves etc.</li>\n            <li>Reports include employee detail, month wise salary slip, and loan detail, employee record etc.</li>\n          </ul>\n        </div>\n        <div class=\"card-action\"><span>September 2013 - December 2014 | Hyderabad, India</span></div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"col s12 m2\">\n              <img alt=\"Om Info logo\"\n                   src=\"../assets/ominfo.png\"\n                   class=\"responsive-img center-block\"\n                   style=\"height: 50px !important;\">\n            </div>\n            <div class=\"col s12 m10\">\n              <p>\n                <span class=\"card-title teal-text hoverline\">\n                  OM Info Services, Intern\n                </span>\n              </p>\n            </div>\n          </div>\n          <div class=\"role brown-text\">Java Developer</div>\n          <h6>Description</h6>\n          <ul>\n            <li>This project is a web-based application developed using HTML and JavaScript.</li>\n            <li>This application is developed for a consulting and Designing IT service company that delivers system and\n              the Application\n              Integration-Business, e-commerce, database technologies and also web services specialized technology\n              staffing and a spectrum of other\n              IT services to enhance the client company flexibility and improve their business and IT performance.\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-action\"><span>May 2012 - September 2013 | Hyderabad, India</span></div>\n      </div>\n    </div>\n  </section>\n  <section id=\"skills\" class=\"section scrollspy\">\n    <h3 class=\"page-title white-text teal\">Skills</h3>\n    <div class=\"container\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <h4 class=\"brown-text light\">HTML</h4>\n          <div class=\"row text-center\">\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/html5.png\" class=\"responsive-img\">HTML5</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/react.png\" class=\"responsive-img\">JSX</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <h4 class=\"brown-text light\">CSS</h4>\n          <div class=\"row text-center\">\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/css3.png\" class=\"responsive-img\">CSS3</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/sass.png\" class=\"responsive-img\">SASS</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/bootstrap.png\" class=\"responsive-img\">Bootstrap</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <h4 class=\"brown-text light\">Javascript</h4>\n          <div class=\"row text-center\">\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/react.png\" class=\"responsive-img\">React</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/javascript.png\" class=\"responsive-img\">Javascript</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/jquery.png\" class=\"responsive-img\">jQuery</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/angular.png\" class=\"responsive-img\">Angular</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/nodejs.png\" class=\"responsive-img\">Node</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <h4 class=\"brown-text light\">Back-End</h4>\n          <div class=\"row text-center\">\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/spring.png\" class=\"responsive-img\">Spring</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/java.png\" class=\"responsive-img\">Java</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/postgresql.png\" class=\"responsive-img\">PostgreSQL</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/mongodb.png\" class=\"responsive-img\">MongoDB</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <h4 class=\"brown-text light\">Build Tools</h4>\n          <div class=\"row text-center\">\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/webpack.png\" class=\"responsive-img\">Webpack</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/gulp.png\" class=\"responsive-img\">Gulp</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/grunt.png\" class=\"responsive-img\">Grunt</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/docker.png\" class=\"responsive-img\">Docker</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <h4 class=\"brown-text light\">Test Frameworks</h4>\n          <div class=\"row text-center\">\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/jasmine.png\" class=\"responsive-img\">Jasmine/Karma</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/mocha.png\" class=\"responsive-img\">Mocha/Chai</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <h4 class=\"brown-text light\">Other</h4>\n          <div class=\"row text-center\">\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/github.png\" class=\"responsive-img\">Github</div>\n            <div class=\"col s4 m2\"><img alt=\"\" src=\"../assets/heroku.png\" class=\"responsive-img\">Heroku</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section id=\"education\" class=\"section scrollspy\">\n    <h3 class=\"page-title white-text teal\">Education</h3>\n    <div class=\"container\">\n\n      <div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <p><span class=\"card-title\"><a href=\"http://upenn.edu\" class=\"teal-text hoverline\">University of Cumberland's</a></span>\n              </p>\n              <p class=\"brown-text\">Williamsburg, Kentucky</p>\n              <ul>\n                <li>PhD in Information Technology</li>\n                <li>April 2019 - Present</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col s12 m6\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <p><span class=\"card-title\"><a href=\"http://www.gwu.edu\" class=\"teal-text hoverline\">Campbellsville University</a></span>\n              </p>\n              <p class=\"brown-text\">Campbellsville, Kentucky</p>\n              <ul>\n                <li>Master's in Information Security</li>\n                <li>Augest 2017 - April 2019</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <p><span class=\"card-title\"><a href=\"http://upenn.edu\" class=\"teal-text hoverline\">Northwestern Polytechnic University</a></span>\n              </p>\n              <p class=\"brown-text\">Fremont, California</p>\n              <ul>\n                <li>Master's in Computer Science</li>\n                <li>January 2015 - April 2016</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col s12 m6\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <p><span class=\"card-title\"><a href=\"http://www.gwu.edu\" class=\"teal-text hoverline\">Jawaharlal Nehru Technological University</a></span>\n              </p>\n              <p class=\"brown-text\">Kakinada, India</p>\n              <ul>\n                <li>Bachelor's in Computer Science</li>\n                <li>Augest 2010 - April 2013</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <p><span class=\"card-title\"><a href=\"http://upenn.edu\" class=\"teal-text hoverline\">State Board of Technical Education</a></span>\n              </p>\n              <p class=\"brown-text\">Hyderabad, India</p>\n              <ul>\n                <li>Diploma in Computer Science</li>\n                <li>July 2007 - April 2010</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n  <section id=\"contact\" class=\"section scrollspy full-height\">\n    <h3 class=\"page-title white-text teal\">Contact</h3>\n    <div class=\"container\">\n      <p>\n        <a aria-label=\"Email Naresh\"\n           href=\"mailto:ui.nareshyella@gmail.com\"\n           data-position=\"top\"\n           data-tooltip=\"Email Naresh\"\n           class=\"btn-floating btn-large waves-effect waves-light brown tooltipped\">\n          <i class=\"fa fa-envelope\"></i>\n        </a>\n        <a alt=\"\"\n           href=\"mailto:ui.nareshyella@gmail.com\"\n           class=\"hoverline\">\n          ui.nareshyella@gmail.com\n        </a>\n      </p>\n      <p>\n        <a aria-label=\"View Naresh on GitHub\"\n           href=\"https://github.com/d7Zxdeve\"\n           target=\"_blank\"\n           data-position=\"top\"\n           data-tooltip=\"View Naresh on GitHub\"\n           class=\"btn-floating btn-large waves-effect waves-light brown tooltipped\">\n          <i class=\"fa fa-github\"></i>\n        </a>\n        <a alt=\"\"\n           href=\"https://github.com/d7Zxdeve\"\n           target=\"_blank\"\n           class=\"hoverline\">\n          github.com/nareshyella\n        </a>\n      </p>\n      <p>\n        <a aria-label=\"View Naresh on LinkedIn\"\n           href=\"https://www.linkedin.com/in/naresh-ram-prasad-yella-28b716136/\"\n           target=\"_blank\"\n           data-position=\"top\"\n           data-tooltip=\"View Naresh on LinkedIn\"\n           class=\"btn-floating btn-large waves-effect waves-light brown tooltipped\">\n          <i class=\"fa fa-linkedin\"></i>\n        </a>\n        <a alt=\"\"\n           href=\"https://www.linkedin.com/in/naresh-ram-prasad-yella-28b716136/\"\n           target=\"_blank\"\n           class=\"hoverline\">\n          linkedin.com/in/nareshyella\n        </a>\n      </p>\n    </div>\n  </section>\n\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ramyella/WebstormProjects/side-project/myapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map