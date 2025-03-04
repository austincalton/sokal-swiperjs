const s = {
  handleNestedProps: function(input) {
    let output = {};
    
    
    if (!nestedPropsPresent) return;
  
    // Flow
      // Loop over input key / values
      // If value has { then recursively handle nested props & reassign value to output
    Object.keys(input).forEach((k) => {
      // key = k
      // value = input[k]
  
      const str = `${input[k]}`;
      const nestedPropsPresent = str.includes('{') || str.includes('}');
  
      if (nestedPropsPresent) {
        const nested = s.mapNestedProps(input[k]);
      }
  
      output[s.toCamelCase(k)] = input[k];
    });
  
    s.mapNestedProps(input);
  },
  
  mapNestedProps: function(input) {
    // '320:{slidesPerView:2,spaceBetween:20},480:{slidesPerView:3,spaceBetween:30}'
  
    // data-breakpoints="320, 480, 768"
    // data-320="slidesPerView:2,spaceBetween:20"
  
    input = input.replace(/\s+/g, "");
  }
}