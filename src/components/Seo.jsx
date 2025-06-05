import { useEffect } from 'react';

export const Seo = ({ title, description, keywords }) => {
  useEffect(() => {
    // Set title
    document.title = title || "BlockBiz - Construction Materials Supplier";
    
    // Set or update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || "Quality concrete blocks, sand, and cement with reliable delivery";
    
    // Set keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }
  }, [title, description, keywords]);

  return null;
};