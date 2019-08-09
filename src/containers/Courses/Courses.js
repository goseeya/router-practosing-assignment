import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectedHandler = ( id ) => {
      this.props.history.push({pathname: '/courses/' + id});
    }

    render () {
      console.log(this.props);
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                              // <Link to={'/' + course.id} key={course.id}>
                                <Course
                                  key={course.id}
                                  clicked={() => this.courseSelectedHandler(course.id)}
                                  title={course.title}
                                  id={course.id}
                                  currentId={this.props.location.pathname}
                                  />
                                // <article
                                //   className="Course"
                                //   key={course.id}
                                //   clicked={() => this.courseSelectedHandler(course.id)}
                                //   >{course.title}</article>
                              // </Link>
                            );
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={Course} />
            </div>
        );
    }
}

export default Courses;
