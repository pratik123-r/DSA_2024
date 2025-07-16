<script>
  // --- Global Scope ---
  var x = 10;      // ✅ Attached to global object (e.g., window.x in browser)
  let s = 20;      // ✅ Block-scoped, NOT attached to global object

  {
    // --- Block Scope inside Global Scope ---
    let y = 20;    // ✅ Shadows global 'y', only exists inside this block
  }

  function test() {
    // --- Function Scope: test ---
    var o = 45;    // ✅ Scoped to function 'test', NOT global
    let w = 46;    // ✅ Scoped to function 'test'

    {
      // --- Block inside function 'test' ---
      let j = 20;  // ✅ Scoped only to this inner block, shadows 'y' above
    }

    function test1() {
      // --- Function Scope: test1 (nested inside test) ---
      var p = 10;   // ✅ Scoped to 'test1', not visible outside
      let q = 20;   // ✅ Scoped to 'test1'

      {
        // --- Block Scope inside 'test1' ---
        let r = 20; // ✅ Only available inside this block
      }

      console.log(o,w); // 45, 46 clouser
      
      // console.log(p, q, r); // ❌ 'r' would throw ReferenceError here
    }

    return test1
  }

  test()(); // Call outer function
</script>
