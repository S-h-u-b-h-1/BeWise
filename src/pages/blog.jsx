import React from "react";
import "./../styles/Blog.css"; 

function Blog() {
return (
    <div className="blog-page">
    <header className="blog-header">
        <h1>✈️ Plan Smart, Travel Far</h1>
        <br/>
        <h2 style={{color:'white'}}>Your Ultimate Travel Budget Planning Companion</h2>
    </header>

    <div className="blog-container">
        <h3>
        Travelling opens doors to new experiences and unforgettable memories. But without a proper budget,
        it can also bring financial stress. That's where the <strong>BeWiseTravel Budget Planning Tool</strong> comes in.
        </h3>
        <br/>

        <h2>🌟 Why Budgeting is Essential</h2>
        <h4>Stay in control of your trip by managing your expenses, making smarter decisions, and avoiding overspending.</h4>
        <br/>

        <div className="image-container">
        <img src="https://i0.wp.com/www.additudemag.com/wp-content/uploads/2020/10/Budgeting_1920x1080.jpg?w=1920&crop=0%2C0px%2C100%2C1080px&ssl=1" alt="Travel Planning" />
        </div>
        <br/>

        <h2>🛠️ Key Features</h2>
        <ul className="features-list"> 
        <li><strong>Expense Tracking:</strong> Log all your travel expenses with ease.</li>
        <br/>
        <li><strong>Custom Categories:</strong> Create personalized categories like food, transport, activities, etc.</li>
        <br/>
        <li><strong>Set Budgets:</strong> Define your goals and track your progress with visual indicators.</li>
        <br/>
        <li><strong>Overviews:</strong> Weekly/monthly insights help you stay on top of your habits.</li>
        <br/>
        <li><strong>Notifications:</strong> Get alerts when you're nearing or exceeding limits.</li>
        <br/>
        <li><strong>Currency Conversion:</strong> Log expenses in any currency with real-time rates.</li>
        <br/>
        <li><strong>Collaborative Planning:</strong> Invite friends and travel companions to manage budgets together.</li>
        <br/>
        <li><strong>Mobile-Friendly:</strong> Fully responsive across all devices.</li>
        </ul>
        <br/>
        <br/>

        <div className="image-container">
        <img src="https://www.flexjobs.com/blog/wp-content/uploads/2023/05/10054553/12-Flexible-Companies-That-Help-Pay-for-Your-Vacation.jpg?w=1024" alt="Budget Overview" />
        </div>
        <br/>

        <h2>🚀 Start Your Journey</h2>
        <h5>
        The <strong> BeWise Travel Budget Planning Tool</strong> empowers you to take control of your expenses and travel confidently.
        Whether you are a solo explorer or traveling with a group, this tool is designed to make your trips financially smooth and stress-free.
        </h5>

        <h3><em>"Plan wisely. Spend smartly. Travel happily."</em></h3>
        <br/>
        <br/>
    </div>
    </div>
);
}

export default Blog;