import {authorType} from './authorType'
import {blogHeroType} from './blogHeroType'
import blockContent from './blockContent'
import definitionSection from './definitionSection'
import featuredBlogPostSection from './featuredBlogPostSection'
import heroSection from './heroSection'
import homePage from './homePage'
import newsletterSection from './newsletterSection'
import {postType} from './postType'
import upcomingReleaseSection from './upcomingReleaseSection'
import aboutPage from './aboutPage'
import aboutHeroSection from './aboutHeroSection'
import aboutBioSection from './aboutBioSection'
import aboutGallerySection from './aboutGallerySection'
import { productType } from './productType'
import { categoryType } from './categoryType'

export const schemaTypes = [
  // Document types
  homePage,
  aboutPage,
  newsletterSection,
  postType,
  authorType,
  blogHeroType,
  productType,
  categoryType,
  upcomingReleaseSection,

  // Object types (used within documents)
  blockContent,
  heroSection,
  definitionSection,
  featuredBlogPostSection,
  aboutHeroSection,
  aboutBioSection,
  aboutGallerySection,
]
