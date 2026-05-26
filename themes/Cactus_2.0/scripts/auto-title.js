// Auto set post title from filename if no title defined in front-matter
hexo.extend.filter.register('before_post_render', function(data) {
  if (!data.title || data.title.trim() === '') {
    // Get filename without extension
    var filename = data.source.substring(data.source.lastIndexOf('/') + 1);
    filename = filename.replace(/\.md$/, '');
    
    // Remove leading numbers and separators (e.g., "00. " or "01- " or "01_ ")
    filename = filename.replace(/^\d+[\s\.\-_]+/, '');
    
    data.title = filename;
  }
  return data;
});