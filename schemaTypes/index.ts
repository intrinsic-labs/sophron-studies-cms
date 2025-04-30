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

// You will likely need schemas for 'post', 'author', 'category', etc. for the blog later.
// Import them here when created.
// import post from './post'

export const schemaTypes = [
  // Document types
  homePage,
  postType,
  authorType,
  blogHeroType,
  productType,
  categoryType,
  upcomingReleaseSection,
  aboutPage,

  // Object types (used within documents)
  blockContent,
  heroSection,
  definitionSection,
  featuredBlogPostSection,
  newsletterSection,
  aboutHeroSection,
  aboutBioSection,
  aboutGallerySection,
]
