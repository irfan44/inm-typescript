import { gql } from '@urql/core'

export const GET_EXPERIENCES = gql`
  query GetExperiences($orderBy: ExperienceOrderByInput) {
    experiences(orderBy: $orderBy) {
      company
      companyLogo
      employmentType
      startingDate
      endDate
      responsibility
      title
    }
  }
`
