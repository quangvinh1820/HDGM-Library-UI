import React from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Sort from '../components/Sort';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

export default function ChudeSort() {
  return (
    <>
        <Navbar />
        <section class="ftco-section ftco-project" id="projects-section">
            <div class="container">
                <Breadcrumb
                heading={"Nội dung theo phân loại DDC"}
                title={"Nội dung sách theo phân loại DDC"}
                />
                <div id="tblbody">
                    <table class="table table-responsive table-striped table-bordered" id="tbldata">
                        <thead>
                            <tr>
                                <th class="plddc">Mã DDC</th>
                                <th >Nội dung</th>

                            </tr>
                        </thead>
                        <tbody id="trow">
                            <tr>        
                                <td><Link class="tenmadddc" to="">001</Link></td>
                                <td><Link class="tennoidungddc" to="">KHOA HỌC M&#193;Y T&#205;NH</Link></td>
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
