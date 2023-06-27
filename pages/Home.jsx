import React from 'react';
import Header from '../src/components/Header';
import CategoriesSection from '../src/components/CategoriesSection';

export default function Home() {
    return (
        <>
            <div className="container-fluid my-5" >
                <Header />
                <CategoriesSection />
            </div>
        </>
    );
}
