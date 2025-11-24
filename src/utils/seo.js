import { useEffect } from 'react';

/**
 * SEO Component for managing document head metadata
 * Helps with dynamic meta tags for better SEO in SPAs
 */
export const useSEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  url 
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('property', 'twitter:description', description);
    }

    // Update keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Update OG image
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
      updateMetaTag('property', 'twitter:image', ogImage);
    }

    // Update OG title
    if (title) {
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('property', 'twitter:title', title);
    }

    // Update canonical URL
    if (url) {
      updateMetaTag('property', 'og:url', url);
      updateMetaTag('property', 'twitter:url', url);
      updateCanonicalLink(url);
    }
  }, [title, description, keywords, ogImage, url]);
};

/**
 * Helper function to update or create meta tags
 */
const updateMetaTag = (attribute, attributeValue, content) => {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

/**
 * Helper function to update canonical link
 */
const updateCanonicalLink = (url) => {
  let link = document.querySelector('link[rel="canonical"]');
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', url);
};

/**
 * Default SEO configuration for the portfolio
 */
export const DEFAULT_SEO = {
  title: 'Mayank Aggarwal - Senior Software Engineer @ Microsoft | Cloud & Kubernetes Expert',
  description: 'Senior Software Engineer at Microsoft specializing in Azure Cosmos DB, Kubernetes, Cloud Infrastructure & Distributed Systems. Expert in scalable cloud solutions, data protection, and enterprise-grade reliability.',
  keywords: 'Mayank Aggarwal, Senior Software Engineer, Microsoft, Azure, Kubernetes, Cloud Computing, Distributed Systems, Azure Cosmos DB, AKS, DevOps, Software Architecture',
  ogImage: 'https://mayankagg9722.github.io/photo.jpg',
  url: 'https://mayankagg9722.github.io/',
};

export default useSEO;
