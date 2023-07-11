import Styles from '../assets/css/Content.module.css'
import { useState } from "react";


const Content = () => {

    const [show, setShow] = useState(false)

    return (
        <div className={Styles.content}>

            <div className={Styles.btn}>
                <button className={Styles.button} onClick={()=>setShow(!show)}>click to text</button>
            </div>

            <div className={Styles.txt}>

                {
                    show? <p className={Styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum obcaecati omnis sunt qui nostrum rem hic possimus maiores aspernatur provident error animi, laborum dolore unde neque ullam voluptatum asperiores atque eaque, fugit sequi sapiente consequatur. Voluptatem exercitationem atque, quas perspiciatis sapiente perferendis repellat, quod soluta a doloremque neque facere earum asperiores voluptas blanditiis explicabo quisquam quo ad sequi. Delectus quibusdam corporis aliquid, dolorum illo cupiditate, a nesciunt doloremque, molestias quod quas odio distinctio. Minus soluta iste, voluptatem quo minima impedit. Itaque ipsa reprehenderit assumenda similique, quaerat numquam nulla iure commodi molestiae. Ut repudiandae assumenda, earum natus consectetur, eveniet accusamus voluptate, fugiat veniam cum laborum nisi. Explicabo possimus ab quaerat eos nemo expedita et nihil, officiis, quam id voluptates error, facere consectetur modi quas laudantium? Porro maiores explicabo magni ex unde, nobis temporibus molestias sequi voluptatum. Sequi eius porro doloribus eaque, a quis repudiandae libero labore, quibusdam hic, voluptates esse aut deleniti. Eveniet suscipit est perspiciatis soluta! Illo pariatur eos nobis. Hic vel saepe quaerat nihil reiciendis, asperiores sunt beatae nobis tempora rerum quis labore est debitis totam exercitationem. Nobis accusantium repudiandae nesciunt necessitatibus distinctio, obcaecati neque dolorem! Dignissimos facilis, fugiat harum nemo eligendi laboriosam eaque magnam distinctio iusto fuga omnis.</p> : null
                }

            </div>

        </div>
    );
};

export default Content;




    


   

   


        



         

           

         


        



          

        
          
         



            