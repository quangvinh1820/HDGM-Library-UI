import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import Product from '../components/Product';
import Breadcrumb from '../components/Breadcrumb';


export default function Book() {
  return (
    <>
        <Navbar />
        <section class="ftco-section ftco-project" id="projects-section">
            <div class="container">
                <Breadcrumb
                heading={"Sách"}
                title={"Danh mục tác phẩm"}
                total={"Hiện có 155,385 tác phẩm"}
                />
                <Product />
                <Pagination />
            </div>
        </section>
        <Footer />
    </>
  )
}
