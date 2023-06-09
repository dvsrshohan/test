import { graphql } from 'gatsby';
import React from 'react';
import ClintLogo from '../components/ClintLogo/ClintLogo';
import RelatedJobs from '../components/FeaturedJobs/RelatedJobs/RelatedJobs';
import JobAndCompanyDetail from '../components/JobAndCompanyDetail/JobAndCompanyDetail';
import Layout from '../layout/layout';

export default function JobDetails({ data }) {
  const recentJob = data.allMarkdownRemark;

  console.log(data);

  return (
    <div>
      <Layout>
        <JobAndCompanyDetail data={data} />
        <RelatedJobs recentJob={recentJob} />
        <ClintLogo data={data} />
      </Layout>
    </div>
  )
}

export const query = graphql`
query Job($id: Int) {
    markdownRemark(frontmatter: {id: {eq: $id}}) {
      html
      frontmatter {
        aboutCompany
        admin
        employ
        experience
        id
        location
        locationArea
        member
        price
        publishData
        rating
        salaryClass
        team
        title
        tittleImg
      }
    },
    allMarkdownRemark {
        nodes {
          frontmatter {
            id
            title
            tittleImg
            price
            locationArea
            team
            location
            employ
            experience
            admin
            aboutCompany
            member
            publishData
            rating
            salaryClass
          }
        }
      }
      jobDetailsTopBanner: allMarkdownRemark(
        sort: {id: DESC}
        filter: {frontmatter: {section: {in: "Job Details"}}}
      ) {
        nodes {
          frontmatter {
            id
            title
            backBtnLink
            backgroundImage
            breadcrumb {
              link
              title
            }
          }
        }
      }
  }
`
