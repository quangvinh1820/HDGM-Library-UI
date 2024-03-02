import React from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Sort from '../components/Sort';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

export default function Author() {
  return (
    <>
        <Navbar />
        <section class="ftco-section ftco-project" id="projects-section">
            <div class="container">
                <Breadcrumb
                heading={"Tác giả"}
                title={"Danh mục tác giả"}
                sort={<Sort />}
                />
                <div id="tblbody">
                    <table class="table table-responsive table-striped table-bordered" id="tbldata">
                        <thead>
                            <tr>
                                <th>Tên tác giả</th>
                            </tr>
                        </thead>
                        <tbody id="trow">
                            <tr>        
                                <td><a href="/SachTacGia/Index?matacgia=33806&tentacgia=A . D. Sertillanges " style={{fontWeight: "600", color: "blue"}}>A . D. Sertillanges  (1)</a></td>
                            </tr>
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
