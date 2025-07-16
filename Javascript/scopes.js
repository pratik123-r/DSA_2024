<script>
  // --- Global Scope ---
  var x = 10;      // ✅ Attached to global object (e.g., window.x in browser)
  let s = 20;      // ✅ Block-scoped, NOT attached to global object (script)

  {
    // --- Block Scope inside Global Scope ---
    let y = 20;    // ✅ Shadows global 'y', only exists inside this block
  }

  function test() {
    // --- Function Scope: test ---
    var o = 45;    // ✅ Scoped to function 'test', NOT global (local call stack)
    let w = 46;    // ✅ Scoped to function 'test' (local call stack)

    {
      // --- Block inside function 'test' ---
      let j = 20;  // ✅ Scoped only to this inner block, shadows 'y' above
    }

    function test1() {
      // --- Function Scope: test1 (nested inside test) ---
      var p = 10;   // ✅ Scoped to 'test1', not visible outside (local call stack)
      let q = 20;   // ✅ Scoped to 'test1' (local call stack)

      {
        // --- Block Scope inside 'test1' ---
        let r = 20; // ✅ Only available inside this block
      }

      console.log(o,w); // 45, 46 clouser of outer function
      
      // console.log(p, q, r); // ❌ 'r' would throw ReferenceError here
    }

    return test1
  }

  test()(); // Call outer function
</script>
