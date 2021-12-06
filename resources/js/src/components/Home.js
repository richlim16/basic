import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import User from './User';
import Post from './Post';
const Home = () => {
    return (
        // <AppContainer title="Mommy Milkers">
        //     <Link to="/add" className="btn btn-primary">ADD POST</Link>
        //     <div className="table-responsive">
        //         <table className="table table-striped mt-4">
        //             <thead>
        //                 <tr>
        //                     <th>ID</th>
        //                     <th>Image</th>
        //                     <th>Description</th>
        //                     <th>Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>1</td>
        //                     <td>Sample Image</td>
        //                     <td>Sample Desc</td>
        //                     <td>
        //                         <Link to="/edit/1" className="btn btn-warning">EDIT</Link>
        //                         <a href="#" className="btn btn-danger">DELETE</a>
        //                     </td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </AppContainer>
        <div>

            <NavBar />
            <main id="home-body">
                <div>
                    <h2>Friends</h2>
                    <User profilePhoto="https://scontent.fceb4-1.fna.fbcdn.net/v/t1.6435-9/179922935_3812072485581640_6416529595137471531_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHVe1bHDEzB7z4FS-IQ_SclFP7Z3sOkBrQU_tnew6QGtDdlV549gJT5yO-gJy3O0Zq80qJumGb5My3uRrGfZbpO&_nc_ohc=80A-IWYIWfEAX-ykyOU&_nc_ht=scontent.fceb4-1.fna&oh=213d170f622486e0c305cfbc83d0df6d&oe=61D4B6B7" username="Richlim16" />
                    <User profilePhoto="https://avatars.githubusercontent.com/u/54580181?v=4" username="R-ayaay" />
                    <h2>People you may know</h2>
                    <User profilePhoto="https://scontent.fceb4-1.fna.fbcdn.net/v/t1.6435-9/108020072_2749426005161890_7560618786899569698_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFhhSaqlOhMHnHSYLu4p-TL6T3OK0mZ51PpPc4rSZnnU_IyOZTZV-dJzcLilYCe0to9daqY2ShnbHHHqmgBJ1f9&_nc_ohc=0w6Qw3GwFe8AX9HZ-dn&_nc_ht=scontent.fceb4-1.fna&oh=9a8646a3b1107e324106ec9f95afb7cf&oe=61D3F795" username="CapsLock" />
                    <User profilePhoto="https://scontent.fceb4-1.fna.fbcdn.net/v/t1.6435-9/78779126_3797999070217551_1284373411107176448_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFRBTTJq98neJN2l3ydyQbOrf_5o1h1Haut__mjWHUdq_LiN89xiiuGe6WMvlOImdvws1h0bInQLeRgSLdbZlm7&_nc_ohc=Rys-2gtCmYcAX9M69PH&_nc_ht=scontent.fceb4-1.fna&oh=a8c2954e83dc21a20e152bb40f5c2aa7&oe=61D24DC4" username="Chongbjorn" />
                </div>
                <div id="posts-container">
                    <Post userID="1" caption="felt cute, might send armpit pics later" userIMG="https://static.wikia.nocookie.net/virtualyoutuber/images/a/a5/Sakamata_Chloe_Portrait.png" image="https://cdn.donmai.us/sample/46/80/__sakamata_chloe_hololive_drawn_by_rykysd__sample-468047eaa541bafdd15b27ed890ffea3.jpg" dateCreated="Just Now" />
                    <Post userID="1" caption="uwu" userIMG="https://static.wikia.nocookie.net/virtualyoutuber/images/a/a5/Sakamata_Chloe_Portrait.png" image="https://cdn.donmai.us/sample/6d/bb/sample-6dbb041b026da316174ff4f3b50387db.jpg" dateCreated="Two Hours Ago" />
                    <Post userID="2" dateCreated="One Day Ago" />

                </div>
            </main>
        </div>
    );
};

export default Home;