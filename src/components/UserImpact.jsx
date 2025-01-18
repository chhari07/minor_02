import React from "react";
import {
  Bar,
  Pie,
} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const UserImpact = () => {
  const data = {
    user_data: {
      age: 28,
      gender: "Male",
      education: "Graduate",
      income: "Medium",
      occupation: "Farmer",
      region: "Maharashtra",
      marital_status: "Married",
    },
    recommended_schemes: [
      {
        scheme_id: "1",
        scheme_name: "PMAY - Pradhan Mantri Awas Yojana",
        scheme_type: "Housing",
        description: "Affordable housing scheme for economically weaker sections.",
        estimated_impact: {
          employment: 15,
          income: 10,
          education: 0,
          social: 20,
        },
        funding: "₹1,20,000 for urban beneficiaries, ₹1,30,000 for rural beneficiaries",
        timeline: "5 years (2021–2026)",
        eligibility: [
          "Household income below ₹3,00,000 per annum",
          "No ownership of pucca house",
          "Must be a first-time beneficiary of any housing scheme",
        ],
        available_in_region: "Yes",
      },
      {
        scheme_id: "2",
        scheme_name: "MGNREGA",
        scheme_type: "Employment",
        description: "100 days of wage employment for rural households.",
        estimated_impact: {
          employment: 20,
          income: 12,
          education: 0,
          social: 15,
        },
        funding: "₹200 per day as wages for unskilled labor",
        timeline: "Ongoing (launched in 2005)",
        eligibility: [
          "Adult members of rural households willing to do unskilled manual work",
          "Applicant must register with the Gram Panchayat",
          "No upper income limit for eligibility",
        ],
        available_in_region: "Yes",
      },
    ],
    impact_prediction: {
      economic_growth: "Expected increase of 12% in the next 2 years",
      employment_rate: "Projected rise of 18% in rural areas",
      literacy_rate: "Expected increase of 8% in underdeveloped areas",
      poverty_reduction: "5% decrease in poverty levels over 3 years",
    },
    user_feedback: {
      overall_rating: 4.5,
      positive_feedback: "85%",
      negative_feedback: "15%",
      common_complaints: ["Complex application process", "Delayed approvals"],
    },
  };

  // Chart Data
  const chartData = {
    labels: ["Employment", "Income", "Education", "Social"],
    datasets: [
      {
        label: "Estimated Impact (%)",
        data: data.recommended_schemes[0].estimated_impact,
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#E91E63"],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Positive Feedback", "Negative Feedback"],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["#4CAF50", "#E91E63"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">User Impact Analysis</h1>

      {/* User Information */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <p><strong>Age:</strong> {data.user_data.age}</p>
          <p><strong>Gender:</strong> {data.user_data.gender}</p>
          <p><strong>Education:</strong> {data.user_data.education}</p>
          <p><strong>Occupation:</strong> {data.user_data.occupation}</p>
          <p><strong>Income:</strong> {data.user_data.income}</p>
          <p><strong>Region:</strong> {data.user_data.region}</p>
          <p><strong>Marital Status:</strong> {data.user_data.marital_status}</p>
        </div>
      </div>

      {/* Recommended Schemes */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Recommended Schemes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.recommended_schemes.map((scheme) => (
            <div key={scheme.scheme_id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-700 mb-2">{scheme.scheme_name}</h3>
              <p className="text-gray-600 mb-2"><strong>Type:</strong> {scheme.scheme_type}</p>
              <p className="text-gray-600 mb-2">{scheme.description}</p>
              <p className="text-gray-600 mb-2"><strong>Funding:</strong> {scheme.funding}</p>
              <p className="text-gray-600 mb-2"><strong>Timeline:</strong> {scheme.timeline}</p>
              <p className="text-gray-600 mb-2">
                <strong>Eligibility:</strong>
                <ul className="list-disc pl-6">
                  {scheme.eligibility.map((criteria, index) => (
                    <li key={index}>{criteria}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Prediction */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Impact Prediction</h2>
        <ul className="list-disc pl-6">
          <li><strong>Economic Growth:</strong> {data.impact_prediction.economic_growth}</li>
          <li><strong>Employment Rate:</strong> {data.impact_prediction.employment_rate}</li>
          <li><strong>Literacy Rate:</strong> {data.impact_prediction.literacy_rate}</li>
          <li><strong>Poverty Reduction:</strong> {data.impact_prediction.poverty_reduction}</li>
        </ul>
      </div>

      {/* Feedback Chart */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">User Feedback</h2>
        <div className="flex gap-4">
          <div className="w-1/2">
            <Bar data={chartData} />
          </div>
          <div className="w-1/2">
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserImpact;
