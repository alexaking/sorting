describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
      expect (split([3, 6, 4, 2])).toEqual([[3, 6], [4, 2]])
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
        expect (merge([3,6], [2, 4])).toEqual([2,3,4,6])
    });
  });