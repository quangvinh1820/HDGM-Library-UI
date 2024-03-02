import React from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Sort from '../components/Sort';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

export default function Video() {
  return (
    <>
        <Navbar />
        <section class="ftco-section ftco-project" id="projects-section">
            <div class="container">
                <Breadcrumb
                heading={"Video"}
                title={"Danh mục Video"}
                total={"Hiện có 13 video"}
                sort={<Sort />}
                />
                <div id="tblbody">
                    <table id="tbldata">
                        <tbody id="trow">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div class="">
                                        <p class="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div class="">
                                        <p class="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div class="">
                                        <p class="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div class="">
                                        <p class="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div class="">
                                        <p class="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div class="">
                                        <p class="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div class="">
                                        <p class="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div class="">
                                        <p class="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                            </div>
                        </tbody>
                    </table>
                </div>    
                <Pagination />
            </div>
        </section>
        <Footer/>
    </>
  )
}
